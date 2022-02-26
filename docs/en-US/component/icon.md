---
title: Icon
lang: en-US
---

# Icon

require icons from `Element Plus` or `Heroicons`.

## Icon Usage

- If you want to **use directly** like the example, you need to [globally register](https://v3.vuejs.org/guide/component-registration.html#global-registration) the components before using it.

- If you want to see all available SVG icons please check [@element-plus/icons-vue](https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/es/) and the source [element-plus-icons](https://github.com/element-plus/element-plus-icons) out or [Icon Collection](#icons-collection)

- CDN importing and [auto importing](https://github.com/antfu/unplugin-icons) is under developing.

## Installation

### Using packaging manager

```shell
# Choose a package manager you like.

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

## Simple usage

:::warning

Because HTML standard has already defined a tag named [menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu),
so you need to use an alias in order to render the icon, if you register `Menu` directly it will not work.

:::

```vue
<!-- Use tw-icon to provide attributes to SVG icon -->
<template>
  <div class="w-full flex justify-center space-x-4">
    <Edit />
    <AlarmClock />
    <Apple />
    <ArrowUp />
  </div>
</template>
```

<script setup>
import { Edit, AlarmClock, Apple,  Share, ArrowUp, Delete, Search, Loading } from '@element-plus/icons-vue'
</script>


<div class="w-full flex justify-center space-x-4">
  <Edit />
  <AlarmClock />
  <Apple />
  <ArrowUp />
</div>

## Size
可使用本UI设定的`class`：`svg-xs/sm/md/lg/xl/2xl/.../5xl`。若不能满足大小的需求，请使用`tailwind css`的`w-`和`h-`来自定义。

```vue
<div class="w-full flex justify-center space-x-4">
  <Edit class="svg-xs" />
  <Edit class="svg-sm" />
  <Edit class="svg-md" />
  <Edit class="svg-lg" />
  <Edit class="svg-xl" />
  <Edit class="svg-2xl" />
  <Edit class="svg-3xl" />
  <Edit class="svg-4xl" />
  <Edit class="svg-5xl" />
    <Edit class="w-8 h-8" />
  <Edit class="w-[16px] h-[16px]" />
</div>
```

<div class="w-full flex justify-center space-x-4">
  <Edit class="svg-xs" />
  <Edit class="svg-sm" />
  <Edit class="svg-md" />
  <Edit class="svg-lg" />
  <Edit class="svg-xl" />
  <Edit class="svg-2xl" />
  <Edit class="svg-3xl" />
  <Edit class="svg-4xl" />
  <Edit class="svg-5xl" />
  <Edit class="w-8 h-8" />
  <Edit class="w-[16px] h-[16px]" />
</div>

## Color
使用`tailwind css`关于`text`定义的颜色来变更`icon`的颜色。[颜色详情](color.md)

```vue
<div class="w-full flex justify-center space-x-4">
  <Edit />
  <Edit class="text-red-500" />
  <Edit class="text-green-500" />
  <Edit class="text-blue-500" />
  <Edit class="text-purple-500" />
  <Edit class="text-cyan-500" />
</div>
```

<div class="w-full flex justify-center space-x-4">
  <Edit />
  <Edit class="text-red-500" />
  <Edit class="text-green-500" />
  <Edit class="text-blue-500" />
  <Edit class="text-purple-500" />
  <Edit class="text-cyan-500" />
</div>

## Animation
使用`tailwind css`来实现图标动画。本UI已将`tailwind css`默认的动画去除`animate-`前缀，可直接使用对应关键字实现动画效果。

```vue
<div class="w-full flex justify-center space-x-4">
  <Edit />
  <Edit class="load" />
  <Edit class="animate-spin" />
  <Edit class="animate-ping" />
  <Edit class="animate-pulse" />
  <Edit class="animate-bounce" />
</div>
<div class="w-full flex justify-center space-x-4">
  <Edit class="spin" />
  <Edit class="ping" />
  <Edit class="pulse" />
  <Edit class="bounce" />
</div>
```

<div class="w-full flex justify-center space-x-4">
  <Edit />
  <Edit class="load" />
  <Edit class="animate-spin" />
  <Edit class="animate-ping" />
  <Edit class="animate-pulse" />
  <Edit class="animate-bounce" />
</div>
<div class="w-full flex justify-center space-x-4 mt-4">
  <Edit class="spin" />
  <Edit class="ping" />
  <Edit class="pulse" />
  <Edit class="bounce" />
</div>


## Icon Collection

:::tip

**You can use SVG icon in any version** as long as you install it

**You can click the icon to copy it**

:::

<IconList />

## Icon Attributes

| Attribute | Description                | Type                           | Acceptable Value | Default                |
| --------- | -------------------------- | ------------------------------ | ---------------- | ---------------------- |
| color     | SVG tag's fill attribute   | Pick\<CSSProperties, 'color'\> | -                | inherit from color     |
| size      | SVG icon size, size x size | number \| string               | -                | inherit from font size |

