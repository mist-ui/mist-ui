<docs>
---
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

这是一个基础的组件

## en-US

This is a basic component
</docs>

<template>
  <m-modal v-model:visible="visible" title="测试">
    <div style="height: 300px">
      测试
    </div>
  </m-modal>
  <m-button @click="visible = true">
    Open
  </m-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
