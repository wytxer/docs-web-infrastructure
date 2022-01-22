<template>
  <div>
    <div>
      <div class="PB16">
        文件夹上传
        <a-switch v-model="showDirectory" />
      </div>
      <div class="PB16">
        多选上传
        <a-switch v-model="showMultiple" />
      </div>
      <div class="PB16">
        拖拽上传
        <a-switch v-model="showDrag" />
      </div>
      <div class="PB16">
        上传提示
        <a-switch v-model="showTips" />
      </div>
      <div class="PB16">
        自动滚动文件列表
        <a-switch v-model="showAutoScroll" :disabled="showDirectoryName" />
      </div>
      <div class="PB16">
        文件个数限制（5 个，多选上传生效）
        <a-switch v-model="showLimit" :disabled="!showMultiple" />
      </div>
      <div class="PB16">
        文件个数超出是否隐藏上传按钮
        <a-switch v-model="showUploadBtn" :disabled="showDirectory" />
      </div>
      <div class="PB16">
        文件展示类型切换
        <a-select v-model="listType" style="width: 150px" :disabled="showDirectoryName">
          <a-select-option value="text">简单列表</a-select-option>
          <a-select-option value="picture">本地缩略图</a-select-option>
          <a-select-option value="picture-card">图片</a-select-option>
        </a-select>
      </div>
      <div class="PB16">
        文件列表展示成文件夹形式（仅文件夹上传生效）
        <a-switch v-model="showDirectoryName" :disabled="showAutoScroll" />
      </div>
      <div class="PB16">
        获取要提交的数据
        <a-button @click="$confirm({title: '数据', content: JSON.stringify($refs.upload.getFormData())})">获取</a-button>
      </div>
    </div>
    <a-form-model ref="form" :model="values" :rules="rules" :colon="false" style="width: 500px">
      <a-form-model-item label="姓名" prop="name">
        <a-input v-model="values.name" />
      </a-form-model-item>
      <a-form-model-item label="证明材料" prop="files">
        <ak-upload
          ref="upload"
          style="width: 500px"
          v-model="values.files"
          action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3"
          :multiple="showMultiple"
          :drag="showDrag"
          :autoScrollFileList="showAutoScroll"
          :directory="showDirectory"
          :showDirectory="showDirectoryName"
          :limit="showLimit ? 5 : -1"
          :listType="listType"
          :autoHideUploadBtn="showUploadBtn"
          @change="onFileChange"
          @uploaded="onUploaded"
        >
          <span v-if="showTips" slot="tips">仅支持上传文件夹</span>
        </ak-upload>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="onSubmit">
          确定
        </a-button>
        <a-button style="margin-left: 10px" @click="onReset">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data () {
    return {
      values: {
        name: '',
        files: [{
          fileName: '风景图片23.jpeg',
          filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F091114092956%2F140911092956-2.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=02138b4ff0f2e695d5977e4411466600'
        }]
      },
      rules: {
        name: [{ required: true, message: '姓名不允许为空', trigger: 'change' }],
        files: [{ required: true, message: '证明材料不允许为空', trigger: 'change' }]
      },
      listType: 'text',

      // 文件夹上传
      showDirectory: false,
      showMultiple: false,
      showTips: false,
      showDrag: false,
      showAutoScroll: false,
      showLimit: false,
      showUploadBtn: false,
      showDirectoryName: false
    }
  },
  watch: {
    listType () {
      this.values.files = []
    },
    showDirectory () {
      this.values.files = []
      this.showUploadBtn = false
    },
    showMultiple () {
      this.values.files = []
    },
    showTips () {
      this.values.files = []
    },
    showDrag () {
      this.values.files = []
    },
    showAutoScroll () {
      this.values.files = []
    },
    showLimit () {
      this.values.files = []
    },
    showUploadBtn () {
      this.values.files = []
    },
    showDirectoryName () {
      this.values.files = []
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.values)
        } else {
          return false
        }
      })
    },
    onReset () {
      this.$refs.form.resetFields()
      this.listType = 'text'
      this.showDirectory = false
      this.showMultiple = false
      this.showTips = false
      this.showDrag = false
      this.showAutoScroll = false
      this.showLimit = false
      this.showUploadBtn = false
      this.showDirectoryName = false
    },
    onFileChange (info) {
      console.log('onFileChange')
      console.log(info)
    },
    onUploaded () {
      this.$message.success('文件已全部处理完成的回调')
    }
  }
}
</script>
