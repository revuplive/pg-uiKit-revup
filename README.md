# Penguin UIkit

[![Version](https://img.shields.io/npm/v/penguinfinance-uikit2)](https://www.npmjs.com/package/penguinfinance-uikit2) [![Size](https://img.shields.io/bundlephobia/min/penguinfinance-uikit2)](https://www.npmjs.com/package/penguinfinance-uikit2)

Penguinswap UIkit is a set of React components and hooks used to build pages on Penguin's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add penguinfinance-uikit2`

## Setup

### Theme

Before using penguinswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'penguinfinance-uikit2'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'penguinfinance-uikit2'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://penguinswap.github.io/penguin-uikit/)
