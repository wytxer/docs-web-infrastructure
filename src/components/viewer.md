---
title: Viewer 文件预览
---

## 使用场景

支持图片、视频、PDF 和其它文件类型进行预览。


## 使用示例

<layout-code-box title="基础使用" description="不需要任何配置，通过 v-model 指定要预览的文件列表。">
  <demo-viewer-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="指定文件列表的文件类型" description="通过 fileType 字段指定统一的文件类型，使用 listType 设置文件列表的展示形式。">
  <demo-viewer-wrap2 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap2.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="支持不同格式的参数" description="还支持传递一个对象，或者一个单独的文件 url 访问路径，或者作为单独的文件预览组件。">
  <demo-viewer-wrap3 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap3.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="文件名省略处理" description="指定宽度，超出后文件名显示省略号，移动上去显示完整文件名。">
  <demo-viewer-wrap4 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap4.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="自定义内容" description="完全自定义要显示的列表内容，组件只提供预览的能力。">
  <demo-viewer-wrap5 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap5.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="支持音频文件播放" description="支持音频文件播放。">
  <demo-viewer-wrap6 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap6.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="卡片类型自定义展示几列" description="卡片类型自定义展示几列，类似栅格布局里面的 span 属性配置。">
  <demo-viewer-wrap7 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap7.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="通过全局挂载使用" description="全局挂载了 $viewer 函数，可直接调用函数后调用 showModal 来使用。">
  <demo-viewer-wrap8 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/viewer/wrap8.vue
  </highlight-code>
</layout-code-box>


## API

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

<layout-table title="Methods" :columns="columns" :dataSource="methodRecords" />

<layout-table title="插槽" :columns="columns" :dataSource="slotRecords" />

<layout-table title="全局方法" :columns="columns" :dataSource="globalRecords" />

<script>
  export default {
    data() {
      return { 
        columns: ['参数', '说明', '类型', '可选值', '默认值'],
        records: [{
          0: 'v-model',
          1: '受控，如果是数据回显，结构支持 [{name: \'\', url: \'\'}] 和 [{fileName: \'\', filePath: \'\'}]',
          2: 'Array',
          3: '[]',
          4: '[]'
        }, {
          0: 'fileType',
          1: '文件类型，默认通过后缀识别，如果指定了就优先使用',
          2: 'String',
          3: 'image | video | pdf | file',
          4: ''
        }, {
          0: 'listType',
          1: '文件的上传类型，根据不同的 listType 切换成不同的上传样式',
          2: 'String',
          3: 'thumbnail | link | card | custom',
          4: 'thumbnail'
        }, {
          0: 'downloadUrl',
          1: '文件预览地址，如果传递了就使用，否则去取 $api.download',
          2: 'String',
          3: 'String',
          4: '\'\''
        }, {
          0: 'addDownloadPath',
          1: '是否自动添加文件下载地址，默认不拼接，一般也不需要拼接',
          2: 'Boolean',
          3: 'true | false',
          4: 'false'
        }, {
          0: 'showFileList',
          1: '是否显示文件列表，如果在上传组件里面使用则不需要展示列表',
          2: 'String',
          3: 'image | video | pdf | file',
          4: 'true'
        }, {
          0: 'fieldKey',
          1: '设置默认值的文件列表时，传递的 name 和 url，接口一般返回的是 fileName 和 filePath，默认先取 name 和 url，没有的话再去取 fileName 和 filePath',
          2: 'Object',
          3: '{name: String, url: String}',
          4: '{name: \'fileName\', url: \'filePath\'}'
        }, {
          0: 'span',
          1: '仅 listType 为 card 生效，文件列表以栅格形式展示',
          2: 'Boolean | Number',
          3: 'false | Number',
          4: 'false'
        }, {
          0: 'usePdf',
          1: '是否使用 ak-pdf 组件来显示 pdf 文件，默认使用 iframe 来加载。因为在 IE11 里面 pdf 文件会变成下载，所以需要借助 ak-pdf 来展示',
          2: 'Boolean | Object<ak-pdf-canvas attrs>',
          3: 'false | Object',
          4: 'false'
        }, {
          0: 'onAfterClosed',
          1: '弹框完全关闭后的回调',
          2: 'Function',
          3: '--',
          4: '--'
        }, {
          0: 'showDownload',
          1: '是否显示下载按钮',
          2: 'Boolean',
          3: 'true | false',
          4: 'false'
        }],
        // 方法
        methodRecords: [{
          0: 'refs.showModal',
          1: '显示弹框，activeIndex 默认选中第一个，传递具体下标来选中，如果是 true 也是默认选中第一个',
          2: 'Function',
          3: 'Function',
          4: 'showModal(record, activeIndex = true)'
        }, {
          0: 'refs.hideModal',
          1: '隐藏弹框，跟 showModal 对应',
          2: 'Function',
          3: '--',
          4: '--'
        }, {
          0: 'fileChange',
          1: '预览文件切换的回调，点击切换、箭头切换、初次打开预览这三个地方都会触发该方法的回调',
          2: 'Function',
          3: '--',
          4: 'function(index, record)'
        }],
        slotRecords: [{
          0: 'slot=default',
          1: '默认插槽，配合 listType=custom 使用，当默认展示的文件列表不满足时使用。',
          2: '--',
          3: '--',
          4: '--'
        }, {
          0: 'slot=actions',
          1: '在文件列表后面追加操作使用。',
          2: '--',
          3: '--',
          4: '--'
        }, {
          0: 'slot=preview',
          1: '当预览的文件类型需要自定义时使用。',
          2: '--',
          3: '--',
          4: '--'
        }],
        // 全局挂载使用的方法
        globalRecords: [{
          0: 'this.$viewer',
          1: '全局挂载的方法，初始化的时候支持传递所有的 props 属性，返回的实例新增了 close 方法，与 hideModal 的区别是 close 方法在关闭弹框的同时会移除弹框的 DOM 节点，如果是通过全局挂载来使用的弹框，建议是 close 来关闭',
          2: 'Function',
          3: 'this.$viewer(props)',
          4: '--'
        }, {
          0: 'viewer.close',
          1: '调用 this.$viewer 之后返回的 close() 函数，用来关闭当前打开的预览弹框',
          2: 'Function',
          3: '--',
          4: '--'
        }]
      }
    },
  }
</script>

<style>
</style>
