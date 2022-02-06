const path = require('path')
const moment = require('moment')

function resolve (dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
  title: 'Web Infrastructure',
  description: '前端基础建设文档库，包含中后台前端脚手架、组件库、后台脚手架等。',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  dest: './dist',
  port: 9901,
  theme: 'antdocs',
  themeConfig: {
    logo: '/favicon.svg',
    // 顶部导航栏配置
    nav: [
      { text: '主页', link: '/' },
      { text: '使用说明', link: '/guide/introduction' },
      { text: '组件库', link: '/components/quick-start' },
      { text: '中后台前端脚手架', link: '/docs/template-vue2-manage' },
      { text: '后台脚手架', link: '/docs/template-node-egg' },
      { text: '小工具', link: '/docs/wy-cli' }
    ],
    // 侧边栏设置
    sidebar: {
      '/guide/': [
        {
          title: '使用说明',
          path: 'introduction'
        }
      ],
      '/components/': [
        // 新增组件文档时需要在这新增一个路由对象
        {
          title: '快速起步',
          path: 'quick-start'
        },
        {
          title: 'Table 表格',
          path: 'table'
        },
        {
          title: 'Upload 上传',
          path: 'upload'
        },
        {
          title: 'Select 下拉列表',
          path: 'select'
        },
        {
          title: 'YearPicker 年份选择器',
          path: 'year-picker'
        },
        {
          title: 'Viewer 文件预览',
          path: 'viewer'
        },
        {
          title: 'TextFill 自动填充',
          path: 'text-fill'
        },
        {
          title: 'AutoTooltip 自动提示',
          path: 'auto-tooltip'
        }
      ],
      '/docs/': [
        {
          title: '小工具',
          path: 'wy-cli'
        },
        {
          title: '后台脚手架',
          path: 'template-node-egg'
        },
        {
          title: '风格指南',
          path: 'v2-style-guide'
        },
        {
          title: '中后台前端脚手架',
          path: 'template-vue2-manage'
        },
        {
          title: '模板库',
          path: 'tv2m-template'
        },
        {
          title: '样式库',
          path: 'style-utils'
        },
        {
          title: '新手引导组件',
          path: 'shepherd-vue'
        }
      ]
    },
    // 将同时提取 markdown 中的 h2 显示在侧边栏上
    sidebarDepth: 1,
    // 上次更新
    lastUpdated: '最后更新时间'
  },
  markdown: {},
  plugins: [
    // 回到顶部插件
    '@vuepress/back-to-top',
    // 图片放大组件
    // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
    // ['@vuepress/medium-zoom', { selector: 'img' }]
    // 最后更新时间
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        moment.locale(lang)
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    }]
  ],
  chainWebpack: (config, isServer) => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
