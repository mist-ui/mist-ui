<template>
  <m-config-provider :locale="locales">
    <site-header />
    <router-view />
  </m-config-provider>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { computed, watch } from 'vue'
import SiteHeader from './layouts/header.vue'
const router = useRouter()
const { getLocaleMessage, locale } = useI18n()

const locales = computed(() => getLocaleMessage(locale.value).mist)

watch(locale, () => {
  const to = router.currentRoute.value
  const title = locale.value === 'en-US' ? (to.meta.enTitle ?? to.meta.title) : (to.meta.title ?? to.meta.enTitle)
  if (title)
    document.title = `${title} | Mist Design`
  else
    document.title = 'Mist Design'
})
</script>
