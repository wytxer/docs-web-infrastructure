---
title: Table 表格
---

## 使用场景

基于 a-table 封装的表格组件，增强了加载数据、数据交互提示、列拖动、拖拽排序功能，可以用更少的代码量实现更复杂的功能。


## 使用示例  

<layout-code-box title="基础使用" description="支持多条数据分页展示及表格滚动。">
  <demo-table-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="支持传入函数" description="loadData 支持传入一个普通函数。">
  <demo-table-wrap2 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap2.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="支持传入对象" description="loadData 支持传入一个对象。">
  <demo-table-wrap3 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap3.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="扩展使用" description="支持对表格进行选择、筛选。">
  <demo-table-wrap4 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap4.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="可编辑行" description="带行编辑功能的表格。">
  <demo-table-wrap5 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap5.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="嵌套子表格" description="展示每行数据更详细的信息。">
  <demo-table-wrap6 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap6.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="树形数据展示" description="表格支持树形数据的展示，当数据中有 children 字段时会自动展示为树形表格。">
  <demo-table-wrap7 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap7.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="动态请求数据" description="支持初始化是否自动加载表格数据">
  <demo-table-wrap8 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap8.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="可伸缩列" description="集成 vue-draggable-resizable 来实现可伸缩列。">
  <demo-table-wrap9 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap9.vue
  </highlight-code>
</layout-code-box>   

<layout-code-box title="行拖拽排序" description="支持表格上下行位置拖动进行排序">
  <demo-table-wrap10 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/table/wrap10.vue
  </highlight-code>
</layout-code-box>


## API

其他更多 API，请移步[传送门](https://www.antdv.com/components/table-cn/#API)

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

<layout-table title="Methods" :columns="columns" :dataSource="methodRecords" />

<layout-table title="rowSelection" :columns="columns" :dataSource="rowSelectionRecords" />

<layout-table title="columns" :columns="columns" :dataSource="columnsRecords" />

<script>
export default {
  data() {
    return { 
      columns: ['参数', '说明', '类型', '可选值', '默认值'],
      records: [
      {
        0: 'loadData',
        1: '加载数据的方法，支持传入 Promise | Function | Object，返回结果结构遵循 { data: { rows: [], currentPage: 1, totalSize: 1 } }',
        2: 'Promise | Function | Object',
        3: '--',
        4: '--'
      },
      {
        0: 'autoLoad',
        1: '初始化是否自动加载表格数据',
        2: 'Boolean',
        3: 'true | false',
        4: 'true'
      },
      {
        0: 'showPagination',
        1: '是否展示分页',
        2: 'String | Boolean',
        3: 'auto | true | false',
        4: 'auto'
      },
      {
        0: 'currentPage',
        1: '当前分页',
        2: 'String',
        3: '--',
        4: '1'
      },
      {
        0: 'pageSize',
        1: '当前分页条数',
        2: 'String',
        3: '--',
        4: '10'
      },
      {
        0: 'showSizeChanger',
        1: '是否可以改变 pageSize',
        2: 'Boolean',
        3: 'true / false',
        4: 'true'
      },
      {
        0: 'drag',
        1: '表头 th 是否可以拖动改变列宽',
        2: 'Boolean', 
        3: 'true | false',
        4: 'false'
      },
      {
        0: 'columnStorage',
        1: '是否需要缓存 columns 数据',
        2: 'Boolean', 
        3: 'true | false',
        4: 'false'
      },
      {
        0: 'dragSort',
        1: '是否开启行拖拽排序',
        2: 'Boolean', 
        3: 'true | false',
        4: 'false'
      },
      {
        0: 'alert',
        1: '表格上方的操作提示框，接收两个参数：show、clear',
        2: 'Object',
        3: '{show: Boolean, clear: Function}',
        4: '--'
      },
      {
        0: 'rowSelection',
        1: '同 a-table 的 rowSelection',
        2: 'Object',
        3: '--',
        4: '--'
      }
    ], 
    methodRecords: [
      {
        0: 'drop',
        1: '行拖拽排序结束后的回调',
        2: 'Function', 
        3: '(sourceItem, targetItem, isDrop) => {}',
        4: '--'
      }
    ],
    rowSelectionRecords: [
      {
        0: 'onChange',
        1: '选中项发生变化时的回调，暂不支持受控，外部使用 selectedRowKeys 和 selectedRows 需要在 change 中接收并保存',
        2: 'Function', 
        3: 'function(selectedRowKeys, selectedRows)', 
        4: '--'
      }
    ],
    columnsRecords:[
      {
        0: 'needTotal',
        1: '当进行行选择时，是否展示列总计',
        2: 'Boolean', 
        3: '--',
        4: '--'
      }]
    }
  }
}
</script>

<style>
</style>
