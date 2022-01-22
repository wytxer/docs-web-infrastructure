
<template>
  <a-form-model
    ref="form"
    layout="vertical"
    style="width: 400px"
    :model="values"
    :rules="rules"
    :colon="false"
  >
    <a-row :gutter="24">
      <a-col :span="24">
        <a-form-model-item label="姓名" prop="name">
          <a-input v-model="values.name" placeholder="请输入" />
        </a-form-model-item>
      </a-col>

      <a-col :span="24">
        <a-form-model-item label="出生年份" prop="year">
          <ak-year-picker placeholder="请选择" style="width: 100%" v-model="values.year" allow-clear />
        </a-form-model-item>
      </a-col>

      <a-col :span="24">
        <a-form-model-item>
          <a-button @click="onResetForm">
            重置
          </a-button>
          <a-button type="primary" class="ML16" @click="onSubmit" :loading="loading">
            提交
          </a-button>
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      values: {
        name: '',
        year: null
      },
      rules: {
        name: [{ required: true, message: '不允许为空' }],
        year: [{ required: true, message: '不允许为空' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          const values = {
            ...this.values
          }
          this.$confirm({
            title: '提示',
            content: JSON.stringify(values)
          })
          this.loading = false
        } else {
          return false
        }
      })
    },
    onResetForm () {
      this.$refs.form.resetFields()
      this.values = this.$options.data.call(this).values
    }
  }
}
</script>

<style lang="less" scoped>
</style>
