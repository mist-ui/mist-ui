# Getting Started


## Installation

```shell

npm install mist-ui

# OR

pnpm add mist-ui

```

## Usage


### Global Register

In `main.[t|j]s` register:

```ts
import { createApp } from 'vue'
import mistUI from 'mist-ui'
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
import { Button } from 'mist-ui'
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
import { Button } from 'mist-ui'
import 'mist-ui/es/button/style/css'
</script>
```

