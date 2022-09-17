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
  <m-button type="primary" @click="visiable = true">
    Open
  </m-button>
  <m-modal v-model:visible="visiable">
    测试
  </m-modal>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const visiable = shallowRef(false)
</script>
