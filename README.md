# Vue3 + Ts 项目的脚手架 🐾

## 脚手架概要

### 搭建基础

这个模板使用 [create-vite](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project) 进行自定义搭建，✅ ：

1. Add TypeScript
2. Add Vue Router for Single Page Application development
3. Add Pinia for state management
4. Add ESLint for code quality
5. Add Prettier for code formatting

### 编程风格说明 ⚠️

该 ESLint 规则集（.editorconfig - rules）是基于 "eslint:recommended"
进行的自定义调配，参见 [ESLint - 规则](https://zh-hans.eslint.org/docs/latest/rules/)。

IDE 编程风格：（若 IDE 支持会自动完成 🫣，参见 [EditorConfig](https://editorconfig.org/)）

1. 使用 unix 风格的换行符
2. 使用 tab 制表符进行缩进，且制表符大小为 2
3. 统一字符集为 utf-8
4. 保存文件时以换行符结尾
5. 删除空行的任何空白字符

该 TypeScript 风格（tsconfig.json -
compilerOptions）是基于 [TSConfig Reference](https://www.typescriptlang.org/zh/tsconfig) 进行的自定义选择搭配。

以上这些应该有助于让你开始在 Vite 中使用 Vue 3 进行开发 😊。

## 项目依赖纵览

### 生产 ⚙️ 环境依赖（dependencies）

1. vue: "^3.2.45"
2. vue-router: "^4.1.6"
3. pinia: "^2.0.28"

### 开发 🔧 环境依赖（devDependencies）

1. ...
2. eslint: "^8.22.0"
3. prettier: "^2.8.1"
4. typescript: "^4.9.3"
5. less: "^4.1.3"
6. husky: "^8.0.0"
7. lint-staged: "^13.1.0"
8. postcss-less: "^6.0.0"
9. postcss-preset-env: "^7.8.3"
10. stylelint: "^14.16.0"
11. stylelint-config-prettier: "^9.0.4"
12. stylelint-config-property-sort-order-smacss: "^9.0.0"
13. stylelint-config-recommended-less: "^1.0.4"
14. stylelint-config-standard: "^29.0.0"
15. stylelint-config-standard-vue: "^1.0.0"
16. stylelint-less: "^1.0.6"
17. stylelint-order: "^5.0.0"
18. stylelint-prettier: "^2.0.0"

## 推荐的 IDE

### VSCode

⚠️ 暂未尝食 😋，需自行吃 🍬

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) （并禁用
Vetur） + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)。

为 `.vue` 提供 ts 类型支持：

默认情况下，TypeScript 无法为 `.vue` 处理类型导入信息，因此我们将 `tsc CLI` 替换为 `vue-tsc` 以支持类型检查。在 VSCode
编辑器中，还需配合 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
插件使 TypeScript 语言服务对 `.vue` 文件类型提供支持。

如果独立的 TypeScript 插件对您来说还不够快，Volar
还实现了一个 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)
以发挥更高的性能。您可以通过以下步骤启用它：

1. 禁用内置 TypeScript 扩展
   1. 从 VSCode 的命令行运行 `Extensions: Show Built-in Extensions`
   2. 找到 `TypeScript and JavaScript Language Features`，右键单击并选择 `Disable (Workspace)`
2. 从 VSCode 的命令行运行 `Developer: Reload Window` 以重新加载 VSCode 窗口

### WebStorm（推荐 👍）

WebStorm 为 Vue
的单文件组件提供了很好的内置支持，参见 [Vue 官方文档 - IDE 支持](https://cn.vuejs.org/guide/scaling-up/tooling.html#ide-support) + [WebStorm 官方文档 - Vue.js](https://www.jetbrains.com/help/webstorm/vue-js.html)。

⚠️ 暂不推荐使用 yarn 3 包管理器，与 IDE 会有兼容性问题 🥴，例如在 WebStorm 中 eslint、prettier 等会难以配置相关依赖等 👀 问题。

简单配置 WebStorm 以获得更好的开发体验：

1. 语言和框架 > Javascript > 代码质量工具 > ESLint
   1. 自动 ESLint 配置
   2. 更改检测配置文件集为 `{**/*,*}.{js,ts,jsx,tsx,cjs,mjs,cts,mts,vue}`
   3. ✅ 保存时运行 eslint --fix(U)
   4. ✅ 保存时(S)
2. 语言和框架 > Javascript > Prettier
   1. 配置 Prettier 包为项目依赖下的 prettier 包
   2. 更改检测配置文件集为 `{**/*,*}.{js,ts,jsx,tsx,cjs,mjs,cts,mts,vue}`
   3. ✅ 执行 “重新格式化代码“ 操作时(R)
   4. ✅ 保存时(S)
3. 语言和框架 > TypeScript
   1. 配置 TypeScript 包为项目依赖下的 typescript 包
   2. ✅ TypeScript 语言服务
   3. ✅ 显示项目错误
4. 语言和框架 > TypeScript > TSLint
   1. 自动 TSLint 配置 (A)
5. 工具 > 保存时的操作
   1. ✅ 重新格式化代码
   2. ✅ 优化 import
   3. ✅ 重新排列代码
   4. ✅ 运行代码清理
   5. ✅ 运行 eslint --fix
   6. ✅ 运行 Prettier
6. 语言和框架 > 样式表 > Stylelint
   1. 配置 Stylelint 包为项目依赖下的 stylelint 包
   2. 更改检测配置文件集为 `{**/*,*}.{css,less,scss,vue}`

## 自定义配置

参见 [Vite Configuration Reference](https://cn.vitejs.dev/config/)。

## 项目设置

### 安装依赖

```sh
npm install
```

### 编译和热加载

```sh
npm run dev
```

### 类型检查、编译和压缩产物

```sh
npm run build
```

### [ESLint](https://eslint.org/) 静态分析

```sh
npm run lint
```
