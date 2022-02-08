---
title: 新手引导组件
---


## 介绍

基于 shepherd.js 封装的 Vue.js 版本的新手引导组件。


## 使用场景

新功能指引、功能介绍。


## 快速开始

1、安装

```bash
# npm
npm i @wytxer/shepherd-vue

# yarn
yarn add @wytxer/shepherd-vue
```

2、导入。

支持两种导入方式使用。第一种是全局导入：

```js
import Vue from 'vue'
import Shepherd from '@wytxer/shepherd-vue'

Vue.use(Shepherd)

// 会在 Vue 实例上挂载 $shepherd 函数，通过调用 $shepherd 函数来使用
this.$shepherd(config)
```

另一种是局部导入使用：

```js
import { shepherd } from '@wytxer/shepherd-vue'

// 使用
shepherd(config)
```

`config` 的具体配置参见[这里](#api)


## 使用文档

<layout-code-box title="全局使用" description="使用 Vue.use 来挂载到全局，然后通过调用 $shepherd 函数来使用。">
  <demo-shepherd-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/shepherd/wrap1.vue
  </highlight-code>
</layout-code-box>


## API

[传送门](https://shepherdjs.dev/docs/index.html)


## GitHub

[点我获取源代码](https://github.com/wytxer/shepherd-vue)