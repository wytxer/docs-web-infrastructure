<template>
  <a-form-model ref="form" style="width: 500px" :model="values" :rules="rules" :colon="false">
    <a-form-model-item label="姓名" prop="name">
      <a-input v-model="values.name" />
    </a-form-model-item>

    <a-form-model-item label="证明材料" prop="files">
      <ak-upload
        style="width: 500px"
        action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3"
        v-model="values.files"
        multiple
        directory
        showDirectory
        @uploaded="onUploaded"
      />
    </a-form-model-item>

    <a-form-model-item>
      <a-button @click="onReset">
        重置
      </a-button>
      <a-button type="primary" class="ML16" @click="onSubmit">
        确定
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  data () {
    return {
      values: {
        name: '',
        // files: []
        files: [{
          uid: '文件夹2/-kk6kxu65-0.xrmhjolqjke',
          dirname: '文件夹2/',
          current: 2,
          total: 2,
          files: [{
            relativePath: '文件夹2/手机桌面-背景4.jpg',
            fileName: '手机桌面-背景4.jpg',
            filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F091114092956%2F140911092956-2.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=02138b4ff0f2e695d5977e4411466600'
          }, {
            relativePath: '文件夹2/未命名文件夹/手机桌面背景3.jpeg',
            fileName: '手机桌面背景3.jpeg',
            filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G320105112%2F200G3105112-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=66b592c2f739931dd7ea2b0e459bf2ec'
          }]
        }]
      },
      rules: {
        name: [{ required: true, message: '姓名不允许为空', trigger: 'change' }],
        files: [{ required: true, message: '证明材料不允许为空', trigger: 'change' }]
      }
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
    },
    onUploaded () {
      this.$message.success('文件已全部上传成功')
    }
  }
}
</script>
