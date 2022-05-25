---
title: 后端脚手架
---


## 介绍

基于 Egg.js 的后端脚手架。


## 功能列表

| 模块 | 功能介绍 | 进度 |
| --- | --- | --- |
| 数据库操作 | 内置 ORM egg-sequelize 插件作为数据库操作库，可适配 Postgres、MySQL、MariaDB、SQLite 数据库 | √ |
| 接口路由配置 | 内置 egg-router-plus 插件解决了路由命名空间问题 | √ |
| 自动生成接口文档 | 内置 egg-swagger-doc 插件，按照约定书写接口注释即可自动生成接口使用文档 | √ |
| 字段校验 | 内置 egg-validate-plus 插件作为字段校验，即可以单独使用，也可以配合 egg-swagger-doc 插件使用，既自动生成接口文档又实现了字段校验 | √ |
| 多环境配置 | 内置了本地开发环境、测试环境和生产环境配置，切换和扩展都是非常便捷的 | √ |
| 跨域配置 | 多环境下设置了不同的跨域配置，应对各个环境下对跨域策略的不同诉求 | √ |
| 异常处理 | 统一封装处理抛出的错误，不将错误直接抛出给前端，提高安全性和比较好的前端使用体验 | √ |
| 工具库 | 封装了菜单树处理、版本号对比、uid 生成等常用的工具函数，开发更便捷 | √ |
| 单元测试 | 完整的单元测试，代码更健壮 | √ |
| 微信小程序登录 | 内置了微信小程序授权登录和获取手机号的全流程，可与微信小程序无缝对接 | √ |
| eslint | 内置了比较严格和完整的 eslint 规则，保证了代码规范，协同开发更高效 | √ |


## 项目结构

```bash
.
├── LICENSE
├── README.md              # 搞事之前请先读我
├── app                    # 主程序代码目录
│   ├── contract           # 自动生成接口文档需要的数据结构
│   ├── controller         # 控制器
│   ├── extend             # 框架扩展
│   ├── middleware         # 中间件
│   ├── model              # 数据模型
│   ├── public             # 公共静态资源
│   ├── router.js          # 路由配置
│   └── service            # 服务
├── app.js                 # 入口
├── appveyor.yml
├── config
│   ├── config.default.js  # 默认配置，包含自定义的应用配置、安全策略、cookie、跨域、权限等
│   ├── config.local.js    # 本地环境特有的配置项
│   ├── config.prod.js     # 生产环境特有的配置项
│   ├── config.test.js     # 测试环境特有的配置项
│   ├── config.unittest.js # 单元测试环境特有的配置项
│   └── plugin.js          # 插件，可在里面自定义启用禁用某些插件
├── jsconfig.json
├── db
│   ├── database.sql       # 创建数据库脚本
│   └── tables.sql         # 创建数据表脚本
├── docs
│   ├── note.md            # 项目开发随记
├── package.json
├── test                   # 单元测试
│   └── app
└── yarn.lock
```


## 常用命令

推荐使用 `yarn` 来安装依赖。

```bash
# 安装
yarn install

# 启动开发
yarn dev

# 生产环境启动
yarn start

# 生产环境停止
yarn stop
```


## 项目配置

### 数据库配置

若没有数据库，可执行下面的 sql 新建一个数据库：

```sql
CREATE DATABASE IF NOT EXISTS template_node_egg DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
```

然后导入 `user` 数据表：

```sql
/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : template_node_egg

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 02/01/2022 23:22:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `open_id` varchar(255) NOT NULL COMMENT '同微信的 openid',
  `union_id` varchar(255) DEFAULT NULL COMMENT '同微信的 unionid，作为预留字段，不一定有值',
  `nick_name` varchar(255) CHARACTER SET utf8mb4 NOT NULL COMMENT '昵称，同微信的 nickName',
  `password` varchar(255) DEFAULT NULL COMMENT '登录密码，作为预留字段，不一定有值',
  `avatar_url` text NOT NULL COMMENT '头像，同微信的 avatarUrl',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号码，可能为空',
  `gender` int(11) DEFAULT NULL COMMENT '性别，可能为空',
  `country` varchar(255) DEFAULT NULL COMMENT '国家，可能为空',
  `province` varchar(255) DEFAULT NULL COMMENT '省份，可能为空',
  `city` varchar(255) DEFAULT NULL COMMENT '城市，可能为空',
  `language` varchar(255) DEFAULT NULL COMMENT '语言，可能为空',
  `logged_at` datetime DEFAULT NULL COMMENT '最后登录时间',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1000, 'o8FXk5E4u7hwaguN6kSq-KPXApJ1', NULL, '测试账号', NULL, 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628131130&t=05ee794a54bad8edd2fd8bb2536db5b9', NULL, NULL, NULL, NULL, NULL, NULL, '2022-01-01 23:59:59', '2022-01-01 23:59:59', '2022-01-01 23:59:59');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
```

然后 `yarn dev` 启动开发，若是第一次启动，可能需要在 `config/config.local.js` 修改一下密码配置：

```js
config.sequelize = {
  // 连接用户
  username: 'root',
  // 连接密码
  password: '',
  // 连接的数据库，可根据需要改成已有的数据库
  database: 'template_node_egg',
  // 连接地址
  host: '127.0.0.1',
  // 数据库类型
  dialect: 'mysql'
}
```

:::warning 提示
如果已有的数据库里面 user 表字段跟 `model/user.js` 中定义的对不上，需要自行修改，否则会报错
:::

### 应用配置

自定义的应用配置，修改后全局生效。

```js
/**
 * 自定义的应用配置，修改后全局生效
 */
// 接口前缀名称，跟随业务系统修改
const apiPrefixName = 'api'
// 接口完整前缀
const apiPrefix = `/${apiPrefixName}`
const userConfig = {
  // 应用名称，用于日志文件目录指定、cookie 的 key 指定，具有唯一性，默认是 app.name，也可以改成其他字符串
  appName: app.name,
  apiPrefixName,
  apiPrefix,
  // 默认的 code 码和错误提示信息配置，只需要改这一个地方即可
  resCode: {
    // 服务器异常的 code 标识和提示，一般都不需要改
    serverError: { code: 500, message: '服务器异常' },
    // 成功的 code 标识
    success: { code: 0 },
    // 出错的 code 标识和提示
    error: { code: 602, message: '参数异常' },
    // 未登录的 code 标识和提示
    notLogged: { code: 601, message: '请先登录后再操作' }
  }
}
```

### 安全策略配置

- 脚手架默认启用了 Egg.js 提供的安全策略。

- 脚手架默认允许跨域，而在生产环境关闭此设置，同时自动添加了白名单，开发启动更加便捷：

```js
// 前端端口，跟随实际情况修改
const port = 9001
const domainWhiteList = [
  ...new Set([
    `http://127.0.0.1:${port}`,
    `http://localhost:${port}`,
    // 服务启动时尝试自动获取本机 IP 设置白名单
    `http://${getLocalhost()}:${port}`
  ])
]
config.security = {
  domainWhiteList
}
// 默认允许跨域，生产环境关闭此设置
config.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
```

### 权限配置

带登录体系的接口服务，基本都需要指定一部分不需要登录就能访问的接口，脚手架已内置了跟登录相关的白名单接口：

```js
[
  `${apiPrefix}/user/mock`,
  `${apiPrefix}/user/login`,
  `${apiPrefix}/user/logout`,
  `${apiPrefix}/user/phone`
]
```

### 自动生成文档配置

内置 egg-swagger-doc 插件，按照约定书写接口注释即可自动生成接口使用文档。所有的数据模型结构都在 `app/contract` 中定义。

具体使用文档参见这里[egg-swagger-doc 使用文档](https://github.com/Yanshijie-EL/egg-swagger-doc)，这里就不赘述了。

若不需要此功能，也可在 `config/plugin.js` 中禁用自动生成文档功能：

```js
{
  swaggerdoc: {
    enable: false,
    package: 'egg-swagger-doc'
  }
}
```


## 开发

一般开发一个全新接口，需要完成以下四步：

### 新增模型

在 `app/model` 中新增一个 `log.js` 文件并添加数据模型：

```js
'use strict'

/**
 * 日志表
 */

module.exports = app => {
  // Sequelize.js 提供的数据类型
  const { STRING } = app.Sequelize

  const Log = app.model.define(/* 数据表名称 */ 'log', {
    // 数据表字段
    content: {
      // 字段类型
      type: STRING(255),
      // 字段注释
      comment: '操作内容'
    },
    remarks: {
      type: STRING(255),
      allowNull: false,
      comment: '备注'
    },
    actionType: {
      type: STRING(255),
      comment: '操作类型'
    }
  })

  return Log
}

```

### 新增服务

在 `app/service` 中新增一个 `log.js` 文件并添加一个获取列表的数据库操作方法：

```js
'use strict'

const Service = require('egg').Service

class LogService extends Service {
  // 获取日志列表
  async logs(actionType) {
    const { model } = this.ctx

    return await model.Log.findAll({
      where: {
        actionType
      }
    })
      .then(res => {
        if (res) return res.map(item => item.toJSON())
        return res
      })
  }
}

module.exports = LogService

```

### 新增控制器

在 `app/contract/dto.js` 中新增一个 `logInfo` 模型：

```js
{
  // ...

  logInfo: {
    content: { type: 'string', description: '操作内容' },
    remarks: { type: 'string', description: '备注' },
    actionType: { type: 'string', description: '操作类型' }
  }
}
```

然后在 `app/controller` 中新增一个 `log.js` 文件并添加一个获取列表的方法：

```js
'use strict'

const Controller = require('egg').Controller

/**
 * @controller Log 日志模块
 */
class LogController extends Controller {
  /**
   * @summary 获取操作记录列表
   * @description 根据指定的筛选条件查询用户操作列表
   * @router get /log/logs
   * @response 0 logInfo 日志列表
   */
  async logs() {
    const { ctx } = this
    const { service, helper } = ctx
    const { actionType } = ctx.request.query

    // 参数校验
    const rules = {
      actionType: { required: true, message: '操作类型不能为空' }
    }
    const passed = await ctx.validate(rules, ctx.request.query)
    if (!passed) return

    const data = await service.log.logs(actionType)
    if (data) {
      helper.success(data)
    } else {
      helper.error(null, '日志列表失败')
    }
  }
}

module.exports = LogController

```

### 新增接口

在 `app/router.js` 中新增一个路由接口：

```js
// 获取日志列表
subRouter.get('/log/logs', controller.log.logs)
```

以上例子当然是比较简单的，但大体步骤就是这样。

当然一般新增一个接口时，是不需要再新增一个控制器文件的，基本都是往某个控制器里面添加一个方法，然后在服务里面添加一个数据库操作方法即可。


## 发布

发布之前，需要在 `config/config.prod.js` 中配置好数据库连接配置：

```js
config.sequelize = {
  username: 'root',
  password: '',
  database: 'template_node_egg',
  host: '127.0.0.1',
  dialect: 'mysql'
}
```

启动：

```bash
yarn start
```

停止：

```bash
yarn stop
```


## Sequelize 使用文档

[Sequelize 官方文档](https://sequelize.org/master/)

### 快捷语法

针对开发中高频出现的代码块封装了一个 VSCode 插件，目前支持的模板有：

- egg - controller 骨架
- egg - controller 基础结构
- egg - controller 方法骨架
- egg - controller 参数校验
- egg - service 骨架
- egg - service 方法骨架
- egg - service 分页骨架
- egg - sequelize 数据转对象
- egg - sequelize 数据转数组
- egg - sequelize 分页数据字段转换
- egg - sequelize 事务

模板库支持在 Egg + Sequelize 组合的技术栈中使用，欢迎下载体验：[WY VSCODE SNIPPETS](https://marketplace.visualstudio.com/items?itemName=wytxer.wy-vscode-snippets)

在 JS 文件中输入 `wy-egg` 即可选择需要的模板代码：

<div class="image-box" style="text-align: left">
  <img src="/docs/wy-vscode-snippets.png" style="width: 50%" />
</div>

### 多表查询使用 required 参数

```js
async info() {
  const { model } = this.ctx

  return await model.School.findOne({
    where: { id },
    include: [{
      model: model.College,
      as: 'colleges',
      attributes: [ 'id', 'name' ],
      // https://sequelize.org/master/manual/eager-loading.html#required-eager-loading
      // 查不到数据的时候，返回带结构的数据，例如返回空数组、空对象
      // 当复杂的多表查询中有对嵌套的 include 查询设置 where 条件时，返回的结果是所有查询条件都满足的数据
      required: false
    }]
  })
}
```

### 分页查询使用 distinct 参数

```js
async info() {
  const { model } = this.ctx

  return await ctx.model.School.findAndCountAll({
    limit: parseInt(values.pageSize),
    where: { id },
    // 分页条数不计算 include 里面的数据
    distinct: true,
    include: [{
      model: ctx.model.College,
      as: 'colleges',
      attributes: [ 'id', 'name' ]
    }]
  })
}
```


## GitHub

[后端脚手架 GitHub 地址](https://github.com/wytxer/template-node-egg)
