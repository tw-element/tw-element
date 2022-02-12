---
title: Icon
lang: en-US
---

# Icon

Element Plus provides a set of common icons.

## Icon Usage

- If you want to **use directly** like the example, you need to [globally register](https://v3.vuejs.org/guide/component-registration.html#global-registration) the components before using it.

- If you want to see all available SVG icons please check [@tw-element/icons-vue](https://unpkg.com/browse/@tw-element/icons-vue@latest/dist/es/) and the source [element-plus-icons](https://github.com/element-plus/element-plus-icons) out or [Icon Collection](#icons-collection)

- CDN importing and [auto importing](https://github.com/antfu/unplugin-icons) is under developing.

## Installation

### Using packaging manager

```shell
# Choose a package manager you like.

# NPM
$ npm install @tw-element/icons-vue
# Yarn
$ yarn add @tw-element/icons-vue
# pnpm
$ pnpm install @tw-element/icons-vue
```

## Simple usage

:::warning

Because HTML standard has already defined a tag named [menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu),
so you need to use an alias in order to render the icon, if you register `Menu` directly it will not work.

:::

```vue
<!-- Use el-icon to provide attributes to SVG icon -->
<template>
  <div>
    <el-icon :size="size" :color="color">
      <edit></edit>
    </el-icon>
    <!-- Or use it independently without derive attributes from parent -->
    <edit></edit>
  </div>
</template>
```

<script setup>
import { Edit, Share, Delete, Search, Loading } from '@tw-element/icons-vue'
</script>

<TwRow>
  <div>
    <TwIcon :size="30">
      <Edit />
    </TwIcon>
    <Edit />
  </div>
</TwRow>

## Combined with el-icon

`el-icon` provides extra attributes for raw SVG icon, for more detail, please read to the end.

```vue
<template>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <el-icon :size="20">
    <edit />
  </el-icon>
  <el-icon color="#409EFC" class="no-inherit">
    <share />
  </el-icon>
  <el-icon>
    <delete />
  </el-icon>
  <el-icon class="is-loading">
    <loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle;">
      <search />
    </el-icon>
    <span style="vertical-align: middle;"> Search </span>
  </el-button>
</template>
```

<TwRow>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
    <TwIcon :size="20">
      <Edit />
    </TwIcon>
    <TwIcon color="#409EFC" class="no-inherit">
      <Share />
    </TwIcon>
    <TwIcon>
      <Delete />
    </TwIcon>
    <TwIcon class="is-loading">
      <Loading />
    </TwIcon>
    <TwButton type="primary">
      <TwIcon style="vertical-align: middle; color: #fff;">
        <Search />
      </TwIcon>
      <span style="vertical-align: middle;"> Search </span>
    </TwButton>
  </div>
</TwRow>

## Using SVG icon directly

```vue
<template>
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <share style="width: 1em; height: 1em; margin-right: 8px;" />
    <delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
</template>
```

<TwRow>
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <Share style="width: 1em; height: 1em; margin-right: 8px;" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <Search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
</TwRow>

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

## Icon Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
