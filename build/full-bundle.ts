import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import { parallel } from 'gulp'
import glob from 'fast-glob'
import { camelCase, upperFirst } from 'lodash'
import { version } from '../packages/tw-element/version'
import { reporter } from './plugins/size-reporter'
import { ElementPlusAlias } from './plugins/element-plus-alias'
import { epRoot, epOutput, localeRoot } from './utils/paths'
import {
  formatBundleFilename,
  generateExternal,
  writeBundles,
} from './utils/rollup'
import { withTaskName } from './utils/gulp'
import { EP_BRAND_NAME } from './utils/constants'
import { target } from './build-info'
import type { Plugin } from 'rollup'

const banner = `/*! ${EP_BRAND_NAME} v${version} */\n`

async function buildFullEntry(minify: boolean) {
  const bundle = await rollup({
    input: path.resolve(epRoot, 'index.ts'),
    plugins: [
      ElementPlusAlias(),
      DefineOptions(),
      vue({
        isProduction: true,
      }) as Plugin,
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        minify,
        sourceMap: minify,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),

        // options
        preventAssignment: true,
      }),
      filesize(),
    ],
    external: await generateExternal({ full: true }),
  })
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(
        epOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'js')
      ),
      exports: 'named',
      name: 'TwElement',
      globals: {
        vue: 'Vue',
      },
      sourcemap: minify,
      banner,
    },
    {
      format: 'esm',
      file: path.resolve(
        epOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'mjs')
      ),
      sourcemap: minify,
      banner,
    },
  ])
}

async function buildFullLocale(minify: boolean) {
  const files = await glob(`${path.resolve(localeRoot, 'lang')}/*.ts`, {
    absolute: true,
  })
  return Promise.all(
    files.map(async (file) => {
      const filename = path.basename(file, '.ts')
      const name = upperFirst(camelCase(filename))

      const bundle = await rollup({
        input: file,
        plugins: [
          esbuild({
            minify,
            sourceMap: minify,
            target,
          }),
          filesize({ reporter }),
        ],
      })
      await writeBundles(bundle, [
        {
          format: 'umd',
          file: path.resolve(
            epOutput,
            'dist/locale',
            formatBundleFilename(filename, minify, 'js')
          ),
          exports: 'default',
          name: `ElementPlusLocale${name}`,
          sourcemap: minify,
          banner,
        },
        {
          format: 'esm',
          file: path.resolve(
            epOutput,
            'dist/locale',
            formatBundleFilename(filename, minify, 'mjs')
          ),
          sourcemap: minify,
          banner,
        },
      ])
    })
  )
}

export const buildFull = (minify: boolean) => async () =>
  Promise.all([buildFullEntry(minify), buildFullLocale(minify)])

export const buildFullBundle = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false))
)
