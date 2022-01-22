<template>
  <div class="demo-select-wrap">
    <ak-select v-model="selected" mode="multiple" style="width: 240px" @blur="onBlur" @mouseenter="onMouseEnter" show-search :loadData="querySelectOptions" />
    <div class="PT16 PB32">
      当前选项：{{ JSON.stringify(selected) }}
    </div>

    <!-- 禁用 -->
    <ak-select :loadData="querySelectOptions" disabled placeholder="请选择" style="width: 240px" />
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
      querySelectOptions,
      selected: ['0', '1']
    }
  },
  methods: {
    onBlur () {
      console.log('失去焦点时回调')
    },
    onMouseEnter () {
      console.log('鼠标移入时回调')
    }
  }
}
</script>
