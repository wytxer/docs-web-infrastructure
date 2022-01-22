---
title: Upload 上传
---

## 使用场景

基于 a-upload 封装的上传组件，支持使用 v-model、支持多种场景的文件上传、内置文件预览、支持文件夹上传、支持并发上传等场景。


## 使用示例

<layout-code-box title="基础使用" description="不需要任何配置">
  <demo-upload-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/upload/wrap1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="多选上传" description="使用 multiple 开启多选上传，同时使用 limit 指定要上传的文件个数。">
  <demo-upload-wrap2 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/upload/wrap2.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="在 a-form-model 中使用" description="支持嵌套在 a-form-model 中，就像使用 input 表单一样，不同的是，trigger 需要设置为 change。">
  <demo-upload-wrap3 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/upload/wrap3.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="自定义上传内容" description="自定义上传内容，设置 block 可以将 upload 组件设置成块级元素。">
  <demo-upload-wrap4 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/upload/wrap4.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="文件夹上传" description="展示成文件夹而不是文件列表的形式。">
  <demo-upload-wrap5 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/upload/wrap5.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="自定义按钮右边的内容" description="想要显示内置的提示，又想要添加其他功能。">
  <demo-upload-wrap6 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/upload/wrap6.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="文件夹上传" description="支持多种场景切换查看效果。">
  <demo-upload-wrap7 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/upload/wrap7.vue
  </highlight-code>
</layout-code-box>


## API

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

<layout-table title="Methods" :columns="columns" :dataSource="methodRecords" />

**其他更多 API，请移步[传送门](https://www.antdv.com/components/upload-cn/#API)**

<script>
  export default {
    data() {
      return { 
        columns: ['参数', '说明', '类型', '可选值', '默认值'],
        records: [{
          0: 'v-model',
          1: '受控',
          2: 'Array',
          3: '',
          4: '[]'
        }, {
          0: 'limit',
          1: '上传个数，默认 1 个，如果设置了 multiple 为 false，limit 将始终是 1',
          2: 'Number',
          3: 'Number',
          4: '1'
        }, {
          0: 'action',
          1: '上传地址，如果传递了就使用，否则去取 $api.upload',
          2: 'String',
          3: 'String',
          4: '\'\''
        }, {
          0: 'downloadUrl',
          1: '文件预览地址，如果传递了就使用，否则去取 $api.download',
          2: 'String',
          3: 'String',
          4: '\'\''
        }, {
          0: 'listType',
          1: '文件的上传类型，根据不同的 listType 切换成不同的上传样式',
          2: 'String',
          3: 'text | picture | picture-card',
          4: 'text'
        }, {
          0: 'beforeUpload',
          1: '同 a-upload 的 beforeUpload，内部做了上传文件的个数限制，且如果文件上传失败了会过滤掉，给出提示，但是不展示在列表里面',
          2: 'Function',
          3: 'Function',
          4: '(file, fileList) => true'
        }, {
          0: 'remove',
          1: '删除文件的回调，同 a-upload 的 remove',
          2: 'Function | Promise',
          3: 'Function',
          4: '(file) => true'
        }, {
          0: 'keys',
          1: '设置默认值的文件列表时，传递的 name 和 url，接口一般返回的是 fileName 和 filePath，默认先取 name 和 url，没有的话再去取 fileName 和 filePath',
          2: 'object',
          3: '{name: String, url: String}',
          4: '{name: \'fileName\', url: \'filePath\'}'
        }, {
          0: 'block',
          1: '把上传组件作为一个块级元素',
          2: 'Boolean',
          3: 'Boolean',
          4: 'false'
        }, {
          0: 'autoHideUploadBtn',
          1: '是否自动隐藏上传按钮，假如当前是单选，那上传文件已经有一个的时候，按钮就会自动隐藏掉，注意，该参数只在 showDirectory 是 false 的时候支持',
          2: 'Boolean',
          3: 'Boolean',
          4: 'false'
        }, {
          0: 'fileChange',
          1: '在 onChange 里面对返回值进行处理，应对返回值不是默认格式的情况，替代 onChange',
          2: 'Function',
          3: 'Function',
          4: '(info) => info'
        }, {
          0: 'drag',
          1: '是否开启拖拽上传',
          2: 'Boolean',
          3: 'Boolean',
          4: 'false'
        }, {
          0: 'autoScrollFileList',
          1: '是否自动滚动文件列表，多选上传了很多文件时使用，具体效果请查看文件夹上传的例子',
          2: 'Boolean',
          3: 'Boolean',
          4: 'false'
        }, {
          0: 'showDirectory',
          1: '文件夹上传时，不显示具体的文件列表，显示成文件夹的形式，同时 showUploadList 自动变成 false',
          2: 'Boolean',
          3: 'Boolean',
          4: 'false'
        }, {
          0: 'concurrentNumber',
          1: '同时上传的并发数量，建议不要超过 50。',
          2: 'Number',
          3: 'Number',
          4: '10'
        }, {
          0: 'getFormData()',
          1: '获取接口需要的表单数据，里面主要是已经组装好的 fileName 和 filePath 字段',
          2: 'Function',
          3: 'Function',
          4: '() => files'
        }],
        // 方法
        methodRecords: [{
          0: '@uploaded',
          1: '文件完全处理完成的回调（并不代表文件已经全部上传成功），返回已上传成功和失败的文件列表，成功列表里面一定都有 response 对象，注意：okFileList 和 failFileList 字段返回的都是本次所选文件的结果，并不是所有的结果',
          2: 'Function',
          3: '\'\'',
          4: '(okFileList, failFileList) => {}'
        }]
      }
    },
  }
</script>

<style>
</style>
