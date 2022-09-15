<template>
  <div class="demo-view">
    <a-button id="driver-btn" type="primary" @click.stop="onOpenDriver">打开新手引导</a-button>

    <div class="PT32">
      <a-button class="MR10">操作一</a-button>
      <a-button class="MR10">操作二</a-button>
      <a-button class="MR10" type="primary" id="main-btn">操作三</a-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onOpenDriver () {
      const driver = this.$shepherd()

      driver.addSteps([{
        canClickTarget: false,
        attachTo: {
          element: document.querySelector('#app header .home-link'),
          on: 'auto'
        },
        title: '顶部导航',
        text: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。',
        buttons: [{
          action () {
            return this.next()
          },
          text: '下一步'
        }]
      }, {
        canClickTarget: false,
        attachTo: {
          element: document.querySelector('#driver-btn'),
          on: 'auto'
        },
        title: '新手引导',
        text: '点击打开新手引导的操作按钮。'
      }, {
        attachTo: {
          element: document.querySelector('#main-btn'),
          on: 'auto'
        },
        title: '操作按钮',
        text: '操作按钮操作按钮操作按钮操作按钮。',
        buttons: [{
          action () {
            return this.cancel()
          },
          text: '完成'
        }]
      }])

      driver.start()
    }
  }
}
</script>
