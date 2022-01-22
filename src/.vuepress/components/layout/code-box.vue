<template>
  <a-config-provider :locale="locale">
    <div class="layout-code-box-wrap">
      <div class="code-title">
        <h2 v-if="title" class="title">{{ title }}</h2>
        <div v-if="description" class="description">{{ description }}</div>
      </div>
      <div class="code-demo">
        <div class="code-content">
          <slot></slot>
        </div>
      </div>
      <div v-if="isShow" class="code-segment">
        <slot name="codeText"></slot>
      </div>
      <div v-if="$slots.codeText" class="code-button">
        <div @click="onToggleShow" class="code-show">
          {{ btnText }}
        </div>
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import locale from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  props: {
    title: String,
    description: String
  },
  data () {
    return {
      locale,
      isShow: false,
      btnText: '显示代码'
    }
  },
  methods: {
    onToggleShow () {
      this.isShow = !this.isShow
      this.btnText = this.isShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style lang="less" scoped>
.layout-code-box-wrap {
  padding: 20px 0;
  .code-title {
    .title {
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-size: 18px;
    }
    .description {
      font-size: 14px;
      display: inline-block;
      margin: 10px 0;
      color: #5e6d82;
    }
  }
  .code-demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6), 0 1px 2px 0 rgba(232, 237, 250, 0.5);
    .code-content {
      box-sizing: border-box;
      padding: 4%;
      border-bottom: 1px solid #ddd;
    }
  }
  .code-button {
    position: relative;
    background: #fafbfc;
    color: #409eff;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    .code-show {
      text-align: center;
      transition: all 0.15s;
      &:hover {
        font-size: 17px;
      }
    }
    .code-online {
      position: absolute;
      top: 0;
      right: 0;
      padding-left: 5px;
      padding-right: 25px;
    }
    .code-online:hover {
      font-size: 17px;
    }
  }
}
</style>
