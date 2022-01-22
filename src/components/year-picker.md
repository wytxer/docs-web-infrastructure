---
title: YearPicker 年份选择器
---

## 使用场景

基于 a-date-picker 封装的年份选择器组件，可在需要选择年份的时候使用。


## 使用示例

<layout-code-box title="基本用法" description="最简单的使用方式。">
  <demo-year-picker-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/year-picker/wrap1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="在 FormModel 中使用" description="最常用的场景，基于 a-date-picker 封装的，a-date-picker 支持的 API 本组件基本都支持。">
  <demo-year-picker-wrap2 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/year-picker/wrap2.vue
  </highlight-code>
</layout-code-box>


## API

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

其他更多 API，请移步[传送门](https://www.antdv.com/components/date-picker-cn/#API)

<script>
  export default {
    data() {
      return { 
        columns: ['参数', '说明', '类型', '可选值', '默认值'],
        records: [{
          0: 'value(v-model)',
          1: '受控，支持字符串或 moment 对象',
          2: 'String | Object',
          3: 'String | Object',
          4: '--'
        }, {
          0: 'change',
          1: '同 a-date-picker 组件的 change，唯一不同的是，value 返回的是字符串而不是 moment 对象',
          2: 'Function',
          3: 'function(value)',
          4: '--'
        }, {
          0: 'panelChange',
          1: '同 a-date-picker 组件的 panelChange，唯一不同的是，value 返回的是字符串而不是 moment 对象',
          2: 'Function',
          3: 'function(value, mode)',
          4: '--'
        }]
      }
    },
  }
</script>
