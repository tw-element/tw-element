module.exports = {
  prefix: 'tw-', // tailwind css 前缀
  important: true, // 开启 important  使用#{!important}
  content: ['./packages/components/button/**/*.{ts,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}