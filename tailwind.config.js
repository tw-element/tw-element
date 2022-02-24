module.exports = {
  important: true, // 开启 important  使用#{!important}
  content: [
    './packages/components/button/**/*.{ts,vue}',
    // './packages/components/icon/**/*.{ts,vue}',
    './node_modules/@tw-element/components/icon/**/*.js',
    '/docs/en-US/**/*.{ts,vue}',
    './docs/examples/**/*.{ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
