## 介绍

基于 ant-design-vue 封装的一套组件库，主要是增强了部分组件的功能，例如 Upload、DatePicker 等。


## 安装

```bash
# npm
npm i @wytxer/antdv-kit

# yarn
yarn add @wytxer/antdv-kit
```


## 全局引用

```js
import AKit from '@wytxer/antdv-kit'

Vue.use(AKit)

// 全局设置 pageSize 和 textFill
Vue.use(AKit, {
  pageSize: 20,
  textFill: '-'
})
```


## 使用

```vue
<ak-upload v-model="files" />
```


## GitHub

[点我获取源代码](https://github.com/wytxer/antdv-kit)
