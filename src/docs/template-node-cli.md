---
title: 命令行脚手架
---


## 介绍

基于 TS 的 Node.js CLI 脚手架。


## 功能列表

| 模块 | 功能介绍 | 进度 |
| --- | --- | --- |
| 环境配置 | 内置 TS 环境，开发、打包和添加新的 types 都非常方便 | √ |
| 命令配置 | 内置对外的命令配置，只需要修改文件名和配置就是一个新的命令了 | √ |
| 发布配置 | 将需要发布的文件已默认添加到 files 配置，发布更省心 | √ |


## 项目结构

```bash
├── CHANGELOG.md      # 更新日志
├── LICENSE
├── README.md         # 搞事之前请先读我
├── bin               # 命令配置
│   └── wy
├── lib               # 打包后的源代码
│   ├── index.d.ts
│   ├── index.js
│   ├── init.d.ts
│   └── init.js
├── package.json
├── src               # 源代码
│   ├── index.ts      # 入口
│   └── init.ts
├── tsconfig.json     # TS 配置
└── yarn.lock
```


## 常用命令

推荐使用 `yarn` 来管理依赖。

```bash
# 安装
yarn install

# 启动开发
yarn run dev

# 打包
yarn run build

# 发布
yarn run publish
```


## 常用的 Node.js CLI NPM 包推荐

- [commander](https://www.npmjs.com/package/commander)：用于命令配置和参数解析，类似的还有 [caporal](https://www.npmjs.com/package/caporal)、[yargs](https://www.npmjs.com/package/yargs)、[cac](https://www.npmjs.com/package/cac)、[optionator](https://www.npmjs.com/package/optionator) 等
- [chalk](https://www.npmjs.com/package/chalk)：用于多种颜色的日志输出
- [dotenv](https://www.npmjs.com/package/dotenv)：用于环境变量解析
- [http-server](https://www.npmjs.com/package/http-server)：用于命令行启动静态 HTTP 服务器
- [inquirer](https://www.npmjs.com/package/inquirer)：用于命令行交互
- [lodash](https://www.npmjs.com/package/lodash)：鼎鼎大名的 JS 工具库，包很大，建议按需导入
- [update-notifier](https://www.npmjs.com/package/update-notifier)：用于 CLI 工具自动更新提示
- [download-git-repo](https://www.npmjs.com/package/download-git-repo)：用于下载 Github 上的代码，通过命令创建脚手架时经常用到
- [shelljs](https://www.npmjs.com/package/shelljs)：用于调用系统命令，例如 `cd`、`cp`、`ls`、`rm` 等，兼容 Windows 和 Linux
- [ora](https://www.npmjs.com/package/ora)：用于创建加载效果，相当于 React 组件中的 Loading 组件

更多[Node.js CLI NPM 包推荐](https://github.com/sindresorhus/awesome-nodejs#command-line-utilities)


## GitHub

[命令行脚手架 GitHub 地址](https://github.com/wytxer/template-node-cli)
