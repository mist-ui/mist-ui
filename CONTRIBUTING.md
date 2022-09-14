# Contributing

English | [简体中文](./CONTRIBUTING.zh-CN.md)

We welcome your contributions. You can join us in the following ways.

## Reporting Bugs

If you find a bug, please submit an [issue](https://github.com/mist-ui/mist-ui/issues)

* Please search for related content before submitting an issue to make sure the problem has not been mentioned.
* Please describe the problem you encountered as detailed as possible, including operating system, browser version, and reproduction steps.
* Please provide a minimum reproducible repository to help us locate the problem quickly.

## Code Contribution

We welcome your code contribution. In order to ensure that our code structure is unified, please follow the following specifications.

### Development Environment

* Node.js >= 16.x
* pnpm >= 7.x


### Fork Repository

First, you need to Fork this repository, and then Clone your Fork repository to your local.

```shell

git clone forked-repo-url

```

### Install Dependencies

```shell

pnpm i

```

### Start Development Environment

```shell

pnpm site

```

### Develop New Components

In order to ensure that everyone's code structure is consistent, if you need to create a new component, please use our command line tool to create it:

```shell

mist-cli

# Select the template to create

# Select the component

# Enter the component name, for example: tag

# Enter the style prefix, if it is consistent with the component name, press Enter directly

# Enter the site name

# Select tsx, not vue

```
