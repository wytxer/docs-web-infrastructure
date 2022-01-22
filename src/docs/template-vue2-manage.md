---
title: 中后台前端脚手架
---


## 介绍

基于 Vue.js 2.x 和 ant-design-vue 组件库且风格统一的用于快速构建中后台系统的脚手架。在线效果预览[点这里](http://tv2.manage.bszhct.com)


## 兼容性

| 谷歌浏览器 | 火狐浏览器 | Safari 浏览器 | Edge 浏览器 | IE11 |
| --- | --- | --- | --- | --- |
| √ | √ | √ | √ | √ |


## 功能列表

| 功能 | 备注 | 进度 |
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
| 自定义指令 | 预留了统一编写全局自定义指令的位置，全局添加指令和功能更加统一 | √ |
| 打包 | 支持私有化打包（内网环境）和非私有化打包，一键开启和关闭，无需关注繁杂的 webpack 配置 | √ |
| mock 服务 | 内置了 mocker-api 和 mockjs2，应对不同的使用场景，且做了兼容，只需要一种 mock 写法即可，不再因为迟迟没提供接口而等待 | √ |
| eslint | 内置了比较严格的语法规范，更聚焦于业务开发而不是启用哪一个 eslint 规则 | √ |
| store | 内置了 store，可直接获取到用户信息、全局配置等，拿来即用 | √ |
| 用户中心 | 内置了登录、注册、找回密码页面，简单的对接后端接口即可完成账号体系的构建 | √ |
| [模板库](/docs/tv2m-template.html) | 提供了一套模板库来极速创建页面，开发效率显著提升 | √ |
| 单元测试 | 集成完整的测试用例，让脚手架更健壮 | feature |


## 项目结构

```bash
.
├── README.md
├── babel.config.js
├── build
│   ├── plugin.config.js   # 自定义的 webpack 插件配置
│   └── project.config.js  # 项目的配置文件，包含打包配置、mock 服务、cdn 配置、后端接口配置、前缀配置等
├── mock                   # mock 模块
│   ├── index.js
│   ├── modules            # 所有的 mock 数据定义在这里
│   └── utils.js           # 内置处理 mock 数据的工具函数库
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── server
│   └── index.js           # 提供给 wy app 部署包的中间件
├── src
│   ├── api                # 请求定义模块
│   ├── app.vue
│   ├── assets             # 静态资源模块
│   ├── components         # 内置组件模块，业务需要的组件也在这里面定义
│   ├── core               # 项目全局的组件配置、权限指令定义等
│   ├── layouts            # 布局
│   ├── main.js            # 入口文件
│   ├── router             # 路由配置
│   ├── store              # 全局的 store 配置
│   ├── utils              # 全局工具类函数
│   └── views              # 页面
├── vue.config.js          # vue-cli 提供的配置文件
└── yarn.lock

```


## 开发

推荐使用 `yarn` 来安装依赖。

```bash
# 安装
yarn install

# 启动开发服务
yarn dev

# 生产环境打包
yarn build

# 测试环境打包
yarn build:dev
```


## 项目配置

脚手架将零散的配置功能提取到了 `project.config.js` 中进行集中管理，可在 `project.config.js` 中修改接口前缀、私有化打包、自定义主题色配置、后端接口配置等。

- 在 `client.env.API_BASE_URL` 字段和 `server.proxyHost.development` 字段**修改接口前缀和接口请求地址**

```js
{
  /**
   * 请求接口的 url 前缀，跟随后端开发提供的来改，需要跟 server.proxyHost 里面的前缀配置一致
   */
  API_BASE_URL: '/admin',
}

{
  // 请求接口的 url 前缀，跟随后端开发提供的来改
  '^/api': {
    target: 'http://127.0.0.1:7001',
    ws: false,
    changeOrigin: true
  }
}
```

- 在 `client.env.IS_PRIVATE` 字段**修改私有化打包**

```js
{
  /**
   * 是否是私有化项目，就是是否部署到内网，如果项目本身使用到的 ui 库组件很少，也可以设置为 true，以此来减少没有必要的 cdn 资源加载，如果使用了自定义主题功能，一定要设置成 true，否则自定义主题打包后不生效
   */
  IS_PRIVATE: false
}
```

[更多配置项查看和修改](https://github.com/wytxer/template-vue2-manage/blob/main/build/project.config.js)


## 开发设置

项目启动后，在右边会始终有一个「开发设置」按钮，展开后的完整配置项如下：

<div class="image-box" style="text-align: left">
  <img src="/docs/tv2mt-use-dev-drawer.png" style="width: 50%" />
</div>

在这里可以设置菜单风格、主题色、导航模式快速预览效果，确定好最终的配置后，可在 `src/store/modules/app.js` 中同步修改。

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
  themeColor: Vue.ls.get(types.THEME_COLOR, '#1890ff'),
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
实际打包上线后，这个「开发设置」入口会自动隐藏
:::


## 请求

完整的请求配置项如下：

| 字段名 | 注解 |
| ---- | ---- |
| url | 请求地址，如果定义了 url 就优先使用，否则使用 mockUrl，默认不以斜杠开头，如果以斜杠开头就不会拼接 API_BASE_URL 字段 |
| mockUrl | mock 服务的请求地址，定义了就使用 |
| method | 请求方式，支持 get、post、put、delete 等 |
| data | 如果是 post，data 方式传递的参数是 json 类型，可以和下面的 params 字段一起使用 |
| params | 传递的参数是字符串类型的，拼接在 url 后面的，类似 /a/b?id=1&type=2 这种，如果是 get 请求，只能通过 params 传递参数 |
| headerType | 请求头类型，默认是 json，对应的 Content-Type 是「application/json」，设置成 form 的时候，Content-Type 是「application/x-www-form-urlencoded; charset=UTF-8」，设置成 upload，Content-Type 是「multipart/form-data」，设置成 download，headers.resType 是 blob，会自动下载文件，配合 fileName 字段自定义下载文件的名称，设置成 blob，返回文件流信息 |
| fileName | 配合 headerType 等于 download 时使用，用来自定义下载文件的名称 |
| closeAutoTips | 请求失败之后默认会抛出后端给的错误，closeAutoTips 设置为 true 可以关闭掉这个行为 |
<br>

接口 code 配置参见[这里](https://github.com/wytxer/template-vue2-manage/blob/main/src/utils/http.js#L7)

使用示例：

```js
// 发起 post 请求，并传递 data 和 params 参数，然后关闭自动提示
export function queryTableList (data) {
  return http({
    // 定义了 url 就会优先使用，否则使用 mockUrl，url 不以 / 开头时，会自动拼接 BASE_URL 前缀
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
  return http({
    // 接口以 / 开头时，会自动忽略 BASE_URL 配置，这种使用场景一般会配合设置一下代理
    url: '/account/table/list',
    method: 'get',
    params
  })
}

// post 请求下载文件
export function queryDownloadDemo (data) {
  return http({
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
  return http({
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
  return http({
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
   * dynamic：动态。如果是动态模式，路由的增删改在 src/router/route-dynamic.js 中完成，每次
   * 在 routeComponents 中新增一个路由页面之后，再去更新后端的路由菜单
   */
  routeMode: 'dynamic'
}
```

路由支持的配置项如下：

| 字段名 | 注解 |
| ---- | ---- |
| path | 访问路径，不带斜杠，相对路径，最终会组装成绝对路径 |
| component | 对应的组件，静态路由这个值是一个 import 导入的一个页面对象，动态路由是 routeComponents 里面定义的 key |
| title | 当前页面的标题，在面包屑导航和菜单导航里面显示 |
| icon | 菜单前面的 Icon 图标，这个顶级菜单才会设置，目前支持的 Icon 是 antd 的 Icon 组件内的，如果想要自定义图标，需要引入自定义 Icon 组件 |
| meta | 路由的元信息，如果是静态路由，这里面包含了 title、icon、hidden、target、href 和 hideChildren 这 6 个字段 |
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

实际业务中，可能还有 hidden、target、createdAt 等字段，可视情况自行添加。


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


## 使用 Node.js 中间层

- todo


## 独立部署

- todo


## QA

- todo


## GitHub

[点我获取源代码](https://github.com/wytxer/template-vue2-manage)
