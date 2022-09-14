# Getting Started


## Installation

```shell

npm install mist-design

# OR

pnpm add mist-design

```

## Usage


### Global Register

In `main.[tj]s` register:

```ts
import { createApp } from 'vue'
import mistUI from 'mist-design'
import App from './App.vue'
import 'mist-design/dist/mist-ui.css'

const app = createApp(App)
app.use(mistUI)

app.mount('#app')
```


###  Need Global Register Components

We can register components globally:

```ts
import { createApp } from 'vue'
import { Button } from 'mist-design'
import App from './App.vue'

const app = createApp(App)
app.use(Button)

app.mount('#app')
```


### Need Register Components

We can register components in components:

```vue

<template>
  <Button>Button</Button>
</template>

<script lang="ts" setup>
import { Button } from 'mist-design'
import 'mist-design/es/button/style/css'
</script>
```

