# 快速开始


## 安装

```shell

npm install mist-design

# OR

pnpm add mist-design

```

## 使用


### 全局注册


在`main.[tj]s`中进行注册：

```ts
import { createApp } from 'vue'
import mistUI from 'mist-design'
import App from './App.vue'
import 'mist-design/dist/mist-ui.css'

const app = createApp(App)
app.use(mistUI)

app.mount('#app')
```

### 全局按需注册组件

我们还可以按照我们的需要进行按需全局注册组件

```ts
import { createApp } from 'vue'
import { Button } from 'mist-design'
import App from './App.vue'

const app = createApp(App)
app.use(Button)

app.mount('#app')
```


### 按需注册组件

我们可以在组件中使用按需注册需要使用的组件：


```vue
<template>
  <Button>按钮</Button>
</template>

<script lang="ts" setup>
import { Button } from 'mist-design'
import 'mist-design/es/button/style/css'
</script>
```
