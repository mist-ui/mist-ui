# Contributing

简体中文 | [English](./CONTRIBUTING.md)

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
# 输入站点名称
# 选择tsx，不要选择vue
```
