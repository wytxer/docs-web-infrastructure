---
title: Select 下拉列表
---

## 使用场景

基于 a-select 封装的下拉列表组件，当下拉的数据是通过接口获取时使用，将接口函数传递到 loadData 参数，可以减少一些代码量。其他场景还是建议使用 a-select。


## 使用示例 

<layout-code-box title="基础使用" description="支持父组件 v-model 传入，选择之后实时展示">
  <demo-select-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/select/wrap1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="结合 FormModel 使用" description="支持在 FormModel 中使用，支持表单校验。">
  <demo-select-wrap2 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/select/wrap2.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="扩展功能" description="支持 a-select 自带的属性和事件，但建议只是用到 loadData 场景的时候再使用该组件，其他情况用 a-select，该组件只是对 a-select 组件的补充。">
  <demo-select-wrap3 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/select/wrap3.vue
  </highlight-code>
</layout-code-box>


## API

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

<layout-table title="Events" :columns="columns" :dataSource="eventsRecords" />

其他更多 API，请移步[传送门](https://www.antdv.com/components/select-cn/#API)

<script>
export default {
  data() {
    return {
      columns: ['参数', '说明', '类型', '可选值', '默认值'],
      records: [
        {
          0: 'loadData',
          1: '加载数据的方法，支持 Promise 对象和普通函数，也支持传递一个数组作为下拉列表',
          2: 'Promise | Function | Array',
          3: '--',
          4: '--'
        },
        {
          0: 'value(v-model)',
          1: '指定当前选中的条目',
          2: 'String | String[] | Number | Number[] | Object',
          3: '--',
          4: '{}'
        },
        {
          0: 'fieldKey',
          1: '自定义 options 中 value 和 label 的字段取值，不支持只配置 value 或 value，需要两个字段一起设置',
          2: 'Object',
          3: '--',
          4: '{value: \'value\', label: \'label\'}'
        },
        {
          0: 'filterOption',
          1: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false，默认内置了对 label 的搜索匹配',
          2: 'Function | Boolean',
          3: '--',
          4: '(input, option) => option.label.indexOf(input) !== -1'
        }
      ],
      eventsRecords: [
        {
          0: 'change',
          1: '同 a-select 的 change，但 option 的返回值增加了 option.data.attrs.dataOption 字段用来获取当前选中下拉的所有字段信息',
          2: 'Function',
          3: 'Function',
          4: 'function(value, option: Option | Array<Option>)', 
        }
      ]
    }
  }
}
</script>
