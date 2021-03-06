---
title: Color
lang: en-US
---

# Color

Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.

`tailwind css`预设了：`Slate、Gray、Zinc、Neutral、Stone、Red、Orange、Amber、Yellow、Lime、Green、Emerald、Teal、Cyan、Sky、Blue、Indigo、Violet、Purple、Fuchsia、Pink、Rose`的颜色样式，可用于背景色、文字颜色等。

<style lang="scss">
.demo-color-box {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin: 5px 0;
  height: 114px;
  box-sizing: border-box;
  color: var(--tw-color-white);
  font-size: 14px;

  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;

    .bg-blue-sub-item {
      width: 11.1111111%;
      height: 100%;
      display: inline-block;

      &:first-child {
        border-radius: 0 0 0 var(--tw-border-radius-base);
      }
    }

    .bg-secondary-sub-item {
      width: 50%;
      height: 100%;
      display: inline-block;
      &:first-child {
        border-radius: 0 0 0 var(--tw-border-radius-base);
      }
    }
  }
}

.demo-color-box-lite {
  color: var(--tw-text-color-primary);

  .value {
    font-size: 12px;
    opacity: .69;
    line-height: 24px;
  }
}

.bg-transparent {
  color: var(--tw-text-color-primary);
  background-image: linear-gradient(
      45deg,
      rgb(249, 249, 250) 25%,
      transparent 25%
    ),
  linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
  linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
}
</style>

## Main Color
The main color of Element Plus is bright and friendly blue.

<!-- Do not touch -->
<ClientOnly>
  <MainColor />
</ClientOnly>

## Secondary Color

Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)

<!-- Do not touch -->
<ClientOnly>
  <SecondaryColors />
</ClientOnly>

## Neutral Color

Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.

<!-- Do not touch -->
<ClientOnly>
  <NeutralColor />
</ClientOnly>
