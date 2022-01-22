<template>
  <div>
    <div class="MT16 MB16">传入一个对象：{{ JSON.stringify(selected1) }}</div>
    <ak-select v-model="selected1" :loadData="querySelectOptions" style="width: 120px" />

    <div class="MT32 MB16">传入一个字符串：{{ JSON.stringify(selected2) }}</div>
    <ak-select v-model="selected2" :loadData="querySelectOptions" style="width: 120px" />

    <div class="MT32 MB16">loadData 支持直接返回一个数组：{{ JSON.stringify(selected3) }}</div>
    <ak-select v-model="selected3" :loadData="options" style="width: 120px" />
  </div>
</template>

<script>
const options = [{
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

const querySelectOptions = params => {
  return new Promise(resolve => {
    resolve({
      data: [...options]
    })
  })
}

export default {
  data () {
    return {
      querySelectOptions,
      options,
      selected1: {
        key: '0'
      },
      selected2: '1',
      selected3: '0'
    }
  }
}
</script>
