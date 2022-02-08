---
title: 中后台前端脚手架
---


## 介绍

基于 Vue.js 2.x 和 ant-design-vue 组件库且风格统一的用于快速构建中后台系统的脚手架。[在线效果预览](http://tv2.manage.bszhct.com)


## 兼容性

| 谷歌浏览器 | 火狐浏览器 | Safari 浏览器 | Edge 浏览器 | IE11 |
| --- | --- | --- | --- | --- |
| √ | √ | √ | √ | √ |


## 功能列表

| 模块 | 功能介绍 | 进度 |
| --- | --- | --- |
| 动态路由 | 后端返回菜单结构前端渲染，支持一键切换到静态路由 | √ |
| 静态路由 | 前端写死的静态路由，支持一键切换到动态路由 | √ |
| 菜单 | 支持展开收起、黑白色主题切换、支持左边和顶部两种布局，应对业务的多种风格需要 | √ |
| 布局 | 内置了不同的布局，新增布局可应对大部分场景 | √ |
| 权限控制 | 支持控制菜单显隐、按钮显隐，前端对数据结构有一定要求，可约定小改，权限控制如鱼得水 | √ |
| 通用页面 | 内置了 403、404、500 页面，让系统更人性化 | √ |
| 错误捕获 | 可一键开启和关闭错误日志，错误排查和定位可视化管理 | √ |
| 请求 | 基于 axios，支持文件上传、下载、自动检测 header、自定识别 mockUrl 与 url、支持多域名单域名，覆盖了绝大部分作为一个请求的使用场景 | √ |
| 工具库 | 内置了变量类型判断、uuid 生成、常用手机号、身份证、密码校验等其他常用函数，全局可调用，方便快捷 | √ |
| 自定义扩展 | 包含对 Vue.prototype 的扩展、自定义指令、组件库等，全局添加指令和功能更加统一 | √ |
| 打包 | 支持私有云打包（内网环境）和非私有云打包，一键开启和关闭，无需关注繁杂的 webpack 配置 | √ |
| mock 服务 | 内置了 mocker-api 和 mockjs2，应对不同的使用场景，且做了兼容，只需要一种 mock 写法即可，不再因为迟迟没提供接口而等待 | √ |
| eslint | 内置了比较严格和完整的 eslint 规则，保证了代码规范，协同开发更高效 | √ |
| store | 内置了 store，可直接获取到用户信息、全局配置等，拿来即用 | √ |
| 用户中心 | 内置了登录、注册、找回密码页面，简单的对接后端接口即可完成账号体系的构建 | √ |
| 多环境 | 内置了预览环境、演示环境、测试环境、正式环境打包配置，可满足多环境打包部署要求 | √ |
| [模板库](/docs/tv2m-template.html) | 提供了一套模板库来极速创建页面，开发效率显著提升 | √ |
| 单元测试 | 集成完整的测试用例，让脚手架更健壮 | feature |


## 项目结构

```bash
.
├── README.md              # 搞事之前请先白嫖一下我
├── babel.config.js
├── config                 # 项目配置
│   ├── config.js          # 提供给 vue.config.js 使用的自定义配置，抽离了相对独立部分
│   ├── project.config.js  # 提供给 Node.js 部署包的配置项
│   └── theme.plugin.js    # 主题配置，自定义主题配置的时候会用到
├── jsconfig.json
├── mock                   # mock 数据服务
│   ├── index.js
│   ├── modules            # 所有的 mock 数据定义在这里
│   └── utils.js           # 内置处理 mock 数据的工具函数
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── server                # Node.js 部署包中间件
│   └── index.js
├── src                   # 源码目录
│   ├── api               # 请求
│   ├── app.less          # 公共样式
│   ├── app.vue           # 根组件
│   ├── assets            # 静态资源
│   ├── components        # 组件
│   ├── extends           # 扩展，包含对 Vue.prototype 的扩展、自定义指令、组件库等
│   ├── layouts           # 布局
│   ├── main.js           # 入口文件
│   ├── router            # 路由配置
│   ├── store             # store 配置
│   ├── utils             # 工具库
│   └── views             # 页面
├── tests                 # 单元测试
│   └── unit
├── vue.config.js         # vue-cli 提供的配置文件
└── yarn.lock
```


## 常用命令

推荐使用 `yarn` 来安装依赖。

```bash
# 安装
yarn install

# 启动开发服务
yarn serve

# 生产环境打包
yarn build

# 测试环境打包
yarn build:test
```


## 项目配置

### 环境变量

脚手架约定了一份环境变量配置，用来实现对各个功能的切换和支持，各个变量的作用如下：

#### BASE_URL

路由地址前缀，vue-cli 提供的环境变量，一般不需要改，效果同 vue.config.js 中的 `publicPath`，若有对 `publicPath` 的修改需求都强烈建议来修改 `BASE_URL` 变量。


#### VUE_APP_API_PREFIX

请求接口的 url 前缀，跟随后端开发提供的来改，若不需要前缀，可设置为「/」。


#### VUE_APP_LS_PREFIX

脚手架内置了 vue-ls 这个库来操作 storage，此变量是 namespace 字段配置。


#### VUE_APP_PRIVATE

是否属于私有云部署，就是是否部署到内网，如果项目本身使用到的组件很少，也可以设置为 `true`，以此来减少没有必要的 cdn 资源加载，如果使用了自定义主题功能，一定要设置成 `true`，否则自定义主题打包后不生效。


#### VUE_APP_USE_MOCKER

内置 `mocker-api`（可以看到网络请求）和 `mockjs2`（看不到网络请求）两个 mock 服务，设置为 `true` 标识使用 `mocker-api`，设置成 `false` 使用 `mockjs2`。


#### VUE_APP_BUILD_ENV

打包环境，部署到不同生产环境的区分。默认是 production，即生产环境，已在 package.json 中内置了预览环境、测试环境、演示环境和生产环境的配置，可根据业务自行添加更多的环境配置。


#### VUE_APP_THEME_COLOR

主题色，默认是跟随 `ant-design-vue` 的主题色 `#1890ff`，自定义主题色时，主色值只需要修改这一个地方即可，然和在 `config/config.s` 下的 `modifyVars` 字段中配置自定义的主题色变量。跟自定义主题色相关的改动，一般也只需要改动这两个地方即可。


#### VUE_APP_BUILD_REPORT

是否开启打包分析，当发现打包后的 dist 资源文件很大时，设置为 `true`，每次打包完毕后会自动打开本次打包的可视化分析页面。


:::tip 提示
除了上面的环境变量，脚手架基于 vue-cli 提供的 vue.config.js 配置能力，封装了对打包优化、主题配置和接口代理配置功能。
:::

### 打包优化

将 `VUE_APP_PRIVATE` 设置为 `false`，打包时就会自动忽略常用的第三方库而使用 cdn 加载，减少了打包后的资源大小，提高了打包速度。

将 `VUE_APP_PRIVATE` 设置为 `true`，会将所有资源都打包到 dist，同时对第三方库进行了简单的分割以减小单个文件的大小。


### 主题配置

在 `config/theme.config.js` 中封装了自定义主题色功能的支持，配合 `VUE_APP_THEME_COLOR` 变量使用。


### 接口代理配置

在 `config/theme.config.js` 的 `proxy` 字段中配置接口请求地址。

```js
{
  // 系统默认的前缀配置
  [apiPrefix]: {
    target: 'http://127.0.0.1:7001',
    ws: false,
    changeOrigin: true
  },
  // 用户中心接口前缀配置
  '^/account': {
    target: 'http://account.example.com',
    ws: false,
    changeOrigin: true,
    pathRewrite: {
      '^/account': ''
    }
  }
}
```


## 定制

项目启动后，在右边会始终有一个「定制」按钮，展开后的完整配置项如下：

<div class="image-box" style="text-align: left">
  <img src="/docs/tv2mt-use-dev-drawer.jpg" style="width: 50%" />
</div>

在这里可以设置菜单风格、主题色、导航模式快速预览效果，确定好最终的配置后，可在 `src/store/modules/app.js` 中同步修改，以下是支持的完整配置项：

```js
{
  /**
   * logo 的图片地址，默认是 @/assets/logo.svg
   */
  logo,
  /**
   * logo 旁边的 slogan
   */
  slogan: '中后台前端脚手架',
  /**
   * 菜单主题，默认为深色主题
   * dark：深色主题
   * light：亮色主题
   */
  menuTheme: Vue.ls.get(types.MENU_THEME, 'light'),
  /**
   * 菜单模式
   * vertical：垂直，菜单是弹出形式
   * inline：内嵌菜单
   * horizontal：水平，顶部导航菜单
   */
  menuMode: 'inline',
  /**
   * 布局模式
   * side：左右布局，导航菜单在左边
   * top：上下布局，导航菜单在顶部
   */
  layout: Vue.ls.get(types.LAYOUT, 'side'),
  /**
   * 默认的主题色，跟随 ant-design-vue 库
   */
  themeColor: Vue.ls.get(types.THEME_COLOR, process.env.VUE_APP_THEME_COLOR),
  /**
   * 路由模式
   * static：静态。如果是静态模式，路由的增删改在 src/router/route-static.js 中完成
   * dynamic：动态。如果是动态模式，路由的增删改在 src/router/route-dynamic.js 中完成，每次
   * 在 routeComponents 中新增一个路由页面之后，再去更新后端的路由菜单
   */
  routeMode: 'dynamic',
  /**
   * 菜单的展开收起状态
   */
  menuCollapsed: Vue.ls.get(types.MENU_COLLAPSED, false),
  /**
   * 导航模式
   * breadcrumb：面包屑导航
   * tab：标签导航
   */
  navMode: Vue.ls.get(types.NAV_MODE, 'breadcrumb'),
  /**
   * 是否需要捕获错误日志，具体实现代码请移步 src/core/extends.js 里面查看
   */
  catchError: Vue.ls.get(types.CATCH_ERROR, false)
}
```

:::tip 提示
正式环境打包上线后，这个「定制」入口会自动隐藏
:::


## 请求

完整的请求配置项如下：

| 字段名 | 注解 |
| ---- | ---- |
| url | 请求地址，如果定义了 url 就优先使用，否则使用 mockUrl，默认不以斜杠开头，如果以斜杠开头就不会拼接 `VUE_APP_API_PREFIX` 变量 |
| mockUrl | mock 服务的请求地址，定义了就使用 |
| method | 请求方式，支持 get、post、put、delete 等 |
| data | 如果是 post，data 方式传递的参数是 json 类型，可以和下面的 params 字段一起使用 |
| params | 传递的参数是字符串类型的，拼接在 url 后面的，类似 `/a/b?id=1&type=2` 这种，如果是 get 请求，只能通过 params 传递参数 |
| headerType | 请求头类型，默认是 `json`，对应的 `Content-Type` 是 `application/json`，设置成 `form` 的时候，`Content-Type` 是 `application/x-www-form-urlencoded; charset=UTF-8`，设置成 `upload`，`Content-Type` 是 `multipart/form-data`，设置成 `download`，`headers.resType` 是 `blob`，会自动下载文件，配合 `fileName` 字段自定义下载文件的名称，设置成 `blob`，返回文件流信息 |
| fileName | 配合 `headerType` 等于 `download` 时使用，用来自定义下载文件的名称 |
| closeAutoTips | 请求失败之后默认会抛出后端给的错误，`closeAutoTips` 设置为 `true` 可以关闭掉这个行为 |
<br>

[请求 code 配置](https://github.com/wytxer/template-vue2-manage/blob/main/src/utils/http.js#L7)

使用示例：

```js
// 发起 post 请求，并传递 data 和 params 参数，然后关闭自动提示
export function queryTableList (data) {
  return request({
    // 定义了 url 就会优先使用，否则使用 mockUrl，url 不以 / 开头时，会自动拼接 VUE_APP_API_PREFIX 前缀
    url: 'table/list',
    mockUrl: '/mock/table/list',
    method: 'post',
    params,
    data,
    // 设置请求类型
    headerType: 'json',
    // 关闭自动提示
    closeAutoTips: true
  })
}
// 发起 get 请求
export function queryGetDemo (params) {
  return request({
    // 接口以 / 开头时，会自动忽略 VUE_APP_API_PREFIX 配置，这种使用场景一般会配合设置一下代理
    url: '/account/table/list',
    method: 'get',
    params
  })
}
// post 请求下载文件
export function queryDownloadDemo (data) {
  return request({
    url: 'file/download',
    method: 'post',
    // 设置为 download 进行文件下载，内部封装了文件下载动作，调用后会自动下载文件，无需再做其他处理
    headerType: 'download',
    // 指定下载的文件名称
    fileName: '前端入门到放弃.pdf',
    // 参数传递
    data
  })
}
// 获取文件流自定义处理
export function queryContentBlob (data) {
  return request({
    url: 'file/download',
    method: 'post',
    data,
    headerType: 'blob'
  })
    .then(blob => {
      // blob 文件流信息，可自定义处理
    })
}
```


## 使用 mock 服务

在后端还没提供接口前，前端可自定义页面需要的假数据。在 `mock/modules` 新增一个 `select.js` 并定义一个 mock 数据：

```js
const selectData = [
  { value: '1', label: '正常' },
  { value: '2', label: '禁用' }
]
module.exports = {
  'POST /select/list': selectData
}
```

然后在 `mock/index.js` 中引入：

```js
const select = require('./modules/select')
const data = {
  ...addPrefix(select)
}
```

然后在 `src/api/select.js` 中定义调用接口的方法：

```js
// 获取下拉列表
export function querySelectData (params) {
  return request({
    mockUrl: '/mock/select/list',
    method: 'get',
    params
  })
}
```

最后在需要使用该请求的页面导入使用即可。

- 在 template 中使用：

```vue
<ak-select :loadData="querySelectData" />
```

- 在 js 中使用：

```js
querySelectData()
  .then(res => {
    this.selectData = res.data || []
  })
```


## 路由和菜单

路由分为静态和动态两种，静态就是前端写死路由配置，路由的控制完全由前端负责。而动态路由则是由后端接口返回一个菜单列表，前端根据约定规则解析并生成最终的路由。两者的切换只需要在 `src/store/modules/app.js` 中修改 `routeMode` 的值即可。

```js
{
  /**
   * 路由模式
   * static：静态。如果是静态模式，路由的增删改在 src/router/route-static.js 中完成
   * dynamic：动态。如果是动态模式，路由的增删改在 src/router/route-dynamic.js 中完成，每次在 routeComponents 中新增一个路由页面之后，再去更新后端的路由菜单
   */
  routeMode: 'dynamic'
}
```

路由支持的配置项如下：

| 字段名 | 注解 |
| ---- | ---- |
| path | 访问路径，不带斜杠，相对路径，最终会组装成绝对路径 |
| component | 对应的组件，静态路由这个值是一个 import 导入的一个页面对象，动态路由是 `routeComponents` 里面定义的 key |
| title | 当前页面的标题，在面包屑导航和菜单导航里面显示 |
| icon | 菜单前面的 Icon 图标，这个顶级菜单才会设置，目前支持的 Icon 是 antd 的 Icon 组件内的，如果想要自定义图标，需要引入自定义 Icon 组件 |
| meta | 路由的元信息，如果是静态路由，这里面包含了 `title`、`icon`、`hidden`、`target`、`href` 和 `hideChildren` 这 6 个字段 |
| hidden | 设置当前路由是否在菜单导航中显示 |
| hideChildren | 设置当前路由的子路由是否在菜单导航中显示 |
| children | 子路由 |
<br>

一份完整的静态路由看起来像这样：

```js
[{
  path: '/',
  // component 始终指向一个引用的 vue 页面文件
  component: LayoutBase,
  redirect: '/dashboard/workplace',
  children: [{
    path: 'dashboard',
    component: LayoutBlock,
    title: '首页',
    icon: 'dashboard',
    children: [{
      path: 'workplace',
      component: () => import('@/views/dashboard/workspace.vue'),
      title: '工作台'
    }]
  }, {
    path: 'list',
    component: () => import('@/views/table/list.vue'),
    title: '列表',
    icon: 'list'
  }]
}, {
  path: '/user',
  component: LayoutUser,
  title: '用户中心',
  icon: 'user',
  children: []
}]
```

一份相对完整的动态路由看起来像这样：

```js
[{
  id: 1,
  parentId: 0,
  sort: 1,
  path: '/',
  // component 始终指向一个字符串，这个字符串在 src/router/route-dynamic.js 文件的 routeComponents 中定义
  component: 'LayoutBase',
  redirect: '/dashboard/workplace',
  children: [{
    id: 2,
    parentId: 1,
    sort: 1,
    path: 'dashboard',
    component: 'LayoutBlock',
    title: '首页',
    icon: 'dashboard',
    children: [{
      id: 3,
      parentId: 2,
      sort: 1,
      path: 'workplace',
      component: 'workspace',
      title: '工作台',
      icon: null
    }]
  }, {
    id: 4,
    parentId: 1,
    sort: 1,
    path: 'list',
    component: 'tableList',
    title: '列表',
    icon: 'list'
  }]
}, {
  id: 5,
  parentId: 0,
  sort: 1,
  path: '/user',
  component: 'LayoutUser',
  title: '用户中心',
  icon: 'user',
  children: []
}]
```

实际业务中，可能还有 `hidden`、`target`、`createdAt` 等字段，可视情况自行添加。


## 权限

脚手架支持按钮级别的权限控制，只需要在当前登陆的用户信息（`src/store/modules/user.js`）中返回对应的权限点即可。例如当前用户拥有列表页面的编辑、添加和删除权限，那对应的权限点配置如下：

```js
{
  permissions: ['listAdd', 'listDelete', 'listEdit']
}
```

在列表页面控制操作按钮的显示可以这么使用：

```vue
 <a-button v-action.listAdd>添加</a-button>
 <a-button v-action.listDelete>删除</a-button>
```

也可以使用 `$auth` 方法来控制：

```js
if (this.$auth('listEdit')) {
  // 进行编辑操作
}
```


## 样式

脚手架内置了样式库。[样式库使用文档](/docs/style-utils.html)。

脚手架也将 `ant-design-vue` 的主题变量添加到了全局，你可以在任意的 less 中使用其中的变量，就像这样：

```less
.ant-card {
  color: @main-color !important;
}
.C-FAIL {
  color: @error-color;
}
```

[完整的 less 变量](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less)

同时，脚手架为了方便扩展也自定义了一部分 less 变量，可以在 `src/components/index.less` 中找到。


## 使用模板库

脚手架开发了一套配套的模板库，可以方便的创建各种组件和页面，极大提高开发效率。[模板库使用文档](/docs/tv2m-template.html)


## 发布

脚手架内置了生产环境、测试环境、演示环境和预览环境，命令都是配置好的，可直接执行对应的命令进行打包：

```bash
# 生产环境打包
yarn build

# 测试环境打包
yarn build:test

# 演示环境打包
yarn build:demo

# 预览环境打包
yarn build:preview
```

:::tip 提示
预览环境是脚手架自带的环境，会将「定制」功能打包出来。[脚手架视觉效果预览](http://tv2.manage.bszhct.com)
:::


## 部署

### 部署到后端服务器

直接将打包的 dist 静态资源复制到对应后端的静态资源目录即可。例如 Java 做后端的话可以放到 `src/main/resources/static` 下，或者放到 `src/main/webapp` 下。

### 部署到 nginx 服务器

直接将打包的 dist 静态资源复制到 nginx 指定的静态资源目录即可。

### 使用 wy app 部署

`wy` 命令是 `wy-cli` 提供的命令。[wy-cli&nbsp;使用文档](/docs/wy-cli.html)

需要先执行 `yarn build` 打包出来 dist 静态资源包，然后执行 `wy tar` 打包成一个 Node.js 部署包。

然后将部署包上传到后端服务器，解压后在根目录执行 `wy app` 命令一键启动即可。

`wy app` 启动使用的配置文件参见 `config/project.config.js`。


## GitHub

[脚手架 GitHub 地址](https://github.com/wytxer/template-vue2-manage)


## 常见问题

### 如何添加临时的动态路由？

1、先找到 `src/api/user.js` 里面的 **getMenus** 方法

2、使用 **.then** 修改返回值

```js
// 获取菜单树
export function getMenus (data) {
  return request({
    method: 'post',
    url: '',
    mockUrl: '/mock/menus',
    data
  })
    // 临时添加的部分
    .then(res => {
      const data = res.data || []
      // 添加的路由一定都是挂在 / 下面的
      const route = data.find(item => item.path === '/') || {}
      route.children = route.children || []
      // 添加子菜单
      route.children.push({
        path: 'form',
        component: 'form',
        title: '表单',
        icon: 'form'
      })
      // 最后一定要将 res 返回去
      return res
    })
}

```


### 业务通用的常量数据定义在哪里？

建议定义在 `src/utils/const.js` 里面，例如：

```js
export const STATUS = [{
  id: 1, name: '状态一'
}, {
  id: 1, name: '状态二'
}, {
  id: 1, name: '状态三'
}]
```

:::tip 提示
js 里面通过 this.$const 访问，template 里面通过 $const 访问
:::


### 上传下载文件为什么报接口 404 的错误？

上传和下载默认使用 `src/api/index.js` 里面定义的接口，需要改成自己的业务接口，例如：

```js
export default {
  // 上传
  upload: `${API_PREFIX}/upload.json`,
  // 下载
  download: `${API_PREFIX}/download.json`
}
```
