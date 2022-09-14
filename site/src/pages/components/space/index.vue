<template>
  <template v-if="locale === 'en-US'">
    <enUS />
  </template>
  <template v-else>
    <zhCN />
  </template>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import zhCN from './zhCN.md'
import enUS from './enUS.md'

const { locale } = useI18n()

</script>
