---
title: WY CLI
---

## 介绍

一个开箱即用的大前端脚手架创建工具。


## 安装

```bash
npm i @wytxer/wy-cli -g
```


## wy init

初始化一个工程。支持在已经创建好的目录下执行这个命令，例如在 `project-name` 工程下执行 `wy init`，或者直接指定要创建的工程名称，例如：`wy init project-name`。

目前支持的脚手架模板：

```bash
◯ 中后台前端脚手架（Vue.js 2.x + Vue Router + Vuex + Ant Design Vue）
◯ 组件（Vue.js 2.x + Vue Router + Vuex）
◯ 示例（Vue.js 2.x + Vue Router + Vuex）
◯ 后端脚手架（Node.js + Egg.js + Sequelize）
◯ 命令行脚手架（Node.js + TypeScript + Commander）
```

- [中后台前端脚手架使用文档](/docs/template-vue2-manage.html)
- [后端脚手架使用文档](/docs/template-node-egg.html)
- [命令行脚手架使用文档](/docs/template-node-cli.html)


## wy server

启动一个 HTTP 静态资源服务。（基于 http-server）

```bash
# 指定 dist 目录启动服务
wy server dist

# 指定代理地址和端口号
wy server dist -P http://127.0.0.1:7002 -p 1111
```

执行 `wy server` 查看更多使用方式。


## wy tar

将项目打包成一个 Node.js 部署包。

```bash
# -b 表示打包 dist 静态资源，如果你确定 dist 目录是最新的就不需要添加「-b」参数。
# wy tar [-b]

wy tar -b
```


## wy app

与 wy tar 配套启动一个 Node.js 服务，支持静态资源服务、mock 服务、接口代理服务、自定义中间件功能。


## GitHub

[wy-cli GitHub 地址](https://github.com/wytxer/wy-cli)
