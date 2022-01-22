---
title: Text-Fill 自动填充
---

## 使用场景

纯文本且当前文本可能为空的时候展示出一个占位符，可以使用在表格列表或者单独的文本展示。


## 使用示例

<layout-code-box title="最简单的使用方式" description="通过 text 指定文本，如果文本为空则显示成两个横杠（--）">
  <demo-text-fill-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/text-fill/wrap1.vue
  </highlight-code>
</layout-code-box>

## API

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

<script>
  export default {
    data() {
      return { 
        columns: ['参数', '说明', '类型', '可选值', '默认值'],
        records: [{
          0: 'text',
          1: '文本内容',
          2: 'String',
          3: '--',
          4: '\'\''
        }, {
          0: 'hr',
          1: '占位符',
          2: 'String',
          3: '--',
          4: '--'
        }]
      }
    },
  }
</script>

<style>
</style>
