<template>
  <div>
    <div class="PB16">
      文件个数限制（最多 3 个）
      <a-switch v-model="checked" checked-children="打开限制" un-checked-children="不限制" @change="onLimitChange" />
    </div>

    <div class="PB16">
      第二个文件触发上传失败
      <a-switch v-model="uploadFailStateChecked" checked-children="打开" un-checked-children="关闭" @change="onUploadStateChange" />
    </div>

    <div class="PB16">
      上传提示
      <a-switch v-model="showUploadTips" checked-children="显示" un-checked-children="隐藏" />
    </div>

    <ak-upload
      :limit="limit"
      style="width: 500px"
      action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3"
      v-model="files"
      multiple
      @uploaded="onUploaded"
    >
      <span slot="tips" v-if="showUploadTips">
        多选上传，支持任意类型的文件。
      </span>
    </ak-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      files: [],
      limit: -1,

      checked: false,
      uploadFailStateChecked: false,
      showUploadTips: false
    }
  },
  methods: {
    // 上传之前文件控制
    beforeUpload (file, fileList) {
      fileList.forEach((item, i) => {
        const showError = this.uploadFailStateChecked && (this.files.length + i) > 0
        // 模拟上传出错
        item.status = showError ? 'error' : 'done'
        item.response = {
          code: showError ? 500 : 0,
          data: {}
        }
      })
      return false
    },
    // 文件个数限制切换回调
    onLimitChange (checked) {
      this.files = []
      if (checked) {
        this.limit = 3
      } else {
        this.limit = -1
      }
    },
    // 上传状态改变
    onUploadStateChange (checked) {
      this.files = []
    },
    // 文件完全上传完成后的回调，单选和多选都会触发
    onUploaded (okFileList, failFileList) {
      console.log(okFileList, failFileList)
    }
  }
}
</script>
