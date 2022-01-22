<template>
  <a-form-model ref="form" :model="values" :rules="rules" :colon="false" style="width: 768px">
    <a-form-model-item label="姓名" prop="name">
      <a-input v-model="values.name" />
    </a-form-model-item>

    <a-form-model-item label="证明材料" prop="files">
      <ak-upload v-model="values.files" action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3" style="width: 350px" @uploaded="onUploaded" />
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
        files: [{
          fileName: '风景图片23.jpeg',
          filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F091114092956%2F140911092956-2.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=02138b4ff0f2e695d5977e4411466600'
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
