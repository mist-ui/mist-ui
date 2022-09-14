<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import zhCN from './zh-CN.md'
import enUS from './en-US.md'
const { locale } = useI18n()
</script>

<template>
  <enUS v-if="locale === 'en-US'" />
  <zhCN v-else />
</template>
