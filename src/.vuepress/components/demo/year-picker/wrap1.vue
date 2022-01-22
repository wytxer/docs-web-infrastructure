<template>
  <div>
    <ak-year-picker placeholder="请选择" v-model="value" allowClear />
    <div class="PT16">当前选中的年份：{{ value }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 默认值支持设置字符串或 moment 对象，但是返回值始终是字符串格式
      value: '2019'
      // value: this.$moment()
    }
  }
}
</script>
