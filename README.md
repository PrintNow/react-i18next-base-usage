# react-i18next-base-usage

React + react-i18next 例子

## 使用到的技术栈

- React 17
- [Vite](https://cn.vitejs.dev/guide/) - 下一代前端开发与构建工具，极速启动服务
- [TypeScript](https://www.typescriptlang.org/zh/docs/) - JavaScript 的超集，拥有静态类型
- [Shopify Polaris](https://polaris.shopify.com/) - 前端样式框架
- [react-i18next](https://react.i18next.com/) - 基于 **i18next** 的一款强大的国际化框架
- [React Router V5](https://v5.reactrouter.com/) - 路由系统

## 安装

### 基础环境要求

> 以下是我测试通过的环境

- Node.js: `v17.6.0`
- Yarn: `1.22.17`

### 目录结构

```bash
src
├── assets
│   └── global.scss     -- 全局样式
├── component           -- 组件目录
│   ├── CodeShow
│   ├── Link
│   ├── NotFound
│   ├── Test.tsx
│   ├── TopBar
│   └── index.ts
├── favicon.svg
├── i18n
│   ├── SupportLanguages.ts
│   ├── config.ts
│   ├── en
│   ├── i18next.d.ts
│   ├── resource.ts
│   └── zh
├── layouts
│   ├── Menu
│   └── index.ts
├── main.tsx
├── pages               -- 相关页面
│   ├── Home
│   ├── Setting
│   └── index.ts
├── routes              -- 路由配置文件
│   └── index.ts
├── styles
│   └── global.sass
├── types
│   └── BaseComponent.ts
├── utils               -- 工具类
│   ├── languages.d.ts
│   ├── languages.ts
│   └── test-util.ts
└── vite-env.d.ts
```

### 安装&使用

```shell
# 安装依赖包
yarn

# 启动开发环境(运行)
yarn run dev
```

## 运行截图

![运行截图](_images/1.png)

## 文档说明

[点击下载](./React_多语言之 react-i18next.pdf)
