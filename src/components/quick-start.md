## 介绍

基于 ant-design-vue 封装的一套组件库，主要是增强了部分组件的功能，例如 Upload、DatePicker 等，同时新增了文件预览、自动提示组件等。


## 安装

推荐使用 `yarn` 来管理依赖。

```bash
yarn add @wytxer/antdv-kit
```

组件库依赖于 ant-design-vue 1.x 版本，如果没有安装：

```bash
yarn add ant-design-vue@^1.7.8
```


## 全局引用

```js
import AKit from '@wytxer/antdv-kit'

Vue.use(AKit)

// 全局设置 pageSize 和 textFill
Vue.use(AKit, {
  // 全局设置分页条数，这样就不用每个使用 table 组件的地方都自定义 pageSize 字段了
  pageSize: 20,
  // 全局设置空占位符，给 ak-text-fill 组件使用的，也可以在 Vue 组件内通过 $textFill 访问
  textFill: '-'
})
```


## 使用

```vue
<ak-upload v-model="files" />
```


## 代码和文档

[组件库 GitHub 地址](https://github.com/wytxer/antdv-kit)

组件库已集成到[中后台前端脚手架](https://github.com/wytxer/template-vue2-manage)，欢迎使用~
