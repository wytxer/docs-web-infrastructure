---
title: Auto-Tooltip 自动提示
---

## 使用场景

如果当前纯文本显示超出了父容器，内容末尾会显示成省略号，且鼠标移上去时显示完整内容。支持在表格和其他类型组件中使用。


## 使用示例

<layout-code-box title="在正常的页面展示中使用" description="通过 text 指定文本，如果文本已经超出了父容器的宽度就会自动显示成省略号，如果传递的文本是空的会自动显示成两个横杠">
  <demo-auto-tooltip-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/auto-tooltip/wrap1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="在 table 中使用" description="如果表格没有指定列宽度，需要设置 scroll={x: '100%'}，否则内容的自适应会撑开表格">
  <demo-auto-tooltip-wrap2 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/auto-tooltip/wrap2.vue
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
          2: 'String | Number',
          3: '--',
          4: '\'\''
        }, {
          0: 'title',
          1: '自定义要显示出来的文本内容',
          2: 'String | Number',
          3: '--',
          4: '\'\''
        }, {
          0: 'hr',
          1: '占位符，同 text-fill 组件',
          2: 'String',
          3: '--',
          4: '--'
        }]
      }
    }
  }
</script>

<style>
</style>
