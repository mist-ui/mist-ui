# Contributing

简体中文 | [English](./CONTRIBUTING.en-US.md)

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建。

## 报告 Bug

如果你发现了 bug，欢迎提交 [issue](https://github.com/mist-ui/mist-ui/issues)

* 请在提交 issue 之前搜索相关内容，确保该问题未被提及。
* 请尽可能详细的描述你遇到的问题，包括操作系统、浏览器版本、复现步骤等。
* 请提供最小可复现仓库，方便我们快速定位问题。

## 代码贡献

我们非常欢迎你的代码贡献，为了保证我们的代码结构统一，请大家遵循以下规范。

### 开发环境

* Node.js >= 16.x
* pnpm >= 7.x


### 认领组件

我们认领组件采用的是提交issue的方式去认领，大家可以创建一个issue，例如：`Components: Button`，然后直接使用创建当前issue的账号开发认领组件即可。完成后请提交PR，完成合并会关闭Issue。整个的流程参考如下：

### Fork 仓库

首先，你需要 Fork 本仓库，然后将你的 Fork 仓库 Clone 到本地。

```shell

git clone forked-repo-url

```

### 安装依赖

```shell

pnpm i

```

### 启动开发环境

```shell

pnpm site

```

### 开发新组件

为了保证大家的代码结构一致，如果需要创建新的组件，请使用我们的命令行工具进行创建：

```shell
mist-cli
# 选择创建模板
# 选择组件
# 输入组件名称 例如: tag
# 输入样式前缀 如果和组件名称一致，直接回车
# 输入站点名称 例如: tag 标签
# 选择tsx，不要选择vue
```

### 代码规范

请开启 `eslint` 和 `stylelint` 的自动修复功能，保证代码风格一致。

代码每次提交前会自动检测我们的代码格式，如果有错误，会自动修复，如果无法修复，会报错，需要手动修复。

### 提交规范

* 新特性请使用 `feat` 开头，例如：`feat: add tag component`
* 修复问题请使用 `fix` 开头，例如：`fix: fix tag component style`
* 其他请使用 `chore` 开头，例如：`chore: update tag component docs`


### Pull Request

请参考文章：[github fork仓库发起Pull Request合入全流程](https://juejin.cn/post/6932300709987614728)
