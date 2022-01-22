<template>
  <div class="demo-select-wrap">
    <a-form-model ref="form" class="ak-query-filter" :model="values" :colon="false">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-model-item label="姓名" prop="name">
            <ak-select :loadData="querySelectOptions" v-model="values.name" @change="onNameChange" />
          </a-form-model-item>
        </a-col>

        <a-col :span="8">
          <a-form-model-item label="电话" prop="phone">
            <a-input disabled v-model="values.phone" />
          </a-form-model-item>
        </a-col>

        <a-col :span="8">
          <a-form-model-item label="年龄" prop="age">
            <ak-select :loadData="querySelectOptions" :fieldKey="{value: 'age', label: 'age'}" v-model="values.age" placeholder="请选择" />
          </a-form-model-item>
        </a-col>

        <a-col :span="8">
          <a-form-model-item label="住址" prop="address">
            <a-input v-model="values.address" placeholder="请输入住址" />
          </a-form-model-item>
        </a-col>

        <a-col :span="8" class="action-btn-main">
          <a-form-model-item>
            <a-button type="primary" @click="onSubmit">提交</a-button>
            <a-button class="ML10" @click="onResetForm">重置</a-button>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>
const querySelectOptions = params => {
  return new Promise(resolve => {
    resolve({
      data: [{
        value: '0',
        label: '张三',
        phone: '13827632221',
        age: '17岁',
        disabled: true
      }, {
        value: '1',
        label: '李四',
        phone: '15128221124',
        age: '18岁',
        disabled: false
      }, {
        value: '2',
        label: '王五',
        phone: '15128221125',
        age: '19岁',
        disabled: false
      }]
    })
  })
}

export default {
  data () {
    return {
      values: {
        name: { key: '1', label: '李四' },
        phone: '15128221124',
        age: ''
      },
      rules: {
        age: [{ required: true, message: '请选择年龄' }],
        address: [{ required: true, message: '请选择住址' }]
      },
      querySelectOptions
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message.info(JSON.stringify(this.values))
        }
      })
    },
    onResetForm () {
      this.$refs.form.resetFields()
    },
    onNameChange (val, option) {
      if (option.data.attrs.dataOption) {
        this.values.phone = option.data.attrs.dataOption.phone
      }
    }
  }
}
</script>

<style lang="less" scoped>
.demo-select-wrap {
  /deep/ .ant-form-item {
    display: flex;
    .ant-form-item-control-wrapper {
      flex: 1;
      min-width: 0;
    }
  }
  .ak-query-filter::after {
    content: none;
  }
}
</style>
