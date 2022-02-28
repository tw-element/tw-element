# DEV FAQ

Here are the problems that are easy to encounter in development.

## If you encounter dependency related issues

```bash
pnpm i
```

## Link local dependencies

```bash
# get dist
pnpm build
cd dist/tw-element
# set cur tw-element to global `node_modules`
pnpm link --global
# for esm we also need link tw-element for dist
pnpm link --global tw-element

# go to your project, link to `tw-element`
cd your-project
pnpm link --global tw-element
```

> More info see [pnpm link](https://pnpm.io/cli/link).

## Theme

We should not write Chinese comments in scss files.

It will generate warning `@charset "UTF-8";` in the header of css file when built with vite.

> More info see [#3219](https://github.com/tw-element/tw-element/issues/3219).
