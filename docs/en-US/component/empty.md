---
title: Empty
lang: en-US
---

# Empty

Placeholder hints for empty states.

## Basic usage

:::demo

empty/basic-usage

:::

## Custom image

Use `image` prop to set image URL.

:::demo

empty/custom-image

:::

## Image size

Use `image-size` prop to control image size.

:::demo

empty/image-size

:::

## Bottom content

Use the default slot to insert content at the bottom.

:::demo

empty/bottom-content

:::

## Custom styles

Now you can set custom style for empty component.
Use `css/scss` language to change the global or local color. We set some global color variables: `--tw-empty-fill-color-0`, `--tw-empty-fill-color-1`, `--tw-empty-fill-color-2`, ......, `--tw-empty-fill-color-9`. You can use like: `:root { --tw-empty-fill-color-0: red; --tw-empty-fill-color-1: blue; }`.
But usually, if you want to change style, you need to change all color, because these colors are a combination.

### Default Variables

| Variable                | Color                 |
| ----------------------- | --------------------- |
| --tw-empty-fill-color-0 | var(--tw-color-white) |
| --tw-empty-fill-color-1 | #fcfcfd               |
| --tw-empty-fill-color-2 | #f8f9fb               |
| --tw-empty-fill-color-3 | #f7f8fc               |
| --tw-empty-fill-color-4 | #eeeff3               |
| --tw-empty-fill-color-5 | #edeef2               |
| --tw-empty-fill-color-6 | #e9ebef               |
| --tw-empty-fill-color-7 | #e5e7e9               |
| --tw-empty-fill-color-8 | #e0e3e9               |
| --tw-empty-fill-color-9 | #d5d7de               |

## Empty Attributes

| Attribute   | Description        | Type   | Acceptable Value | Default |
| ----------- | ------------------ | ------ | ---------------- | ------- |
| image       | image URL          | string | —                | —       |
| image-size  | image size (width) | number | —                | —       |
| description | description        | string | —                | —       |

## Empty Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
