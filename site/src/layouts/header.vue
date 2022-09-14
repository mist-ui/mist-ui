<template>
  <div class="h-64px" />
  <div
    flex
    items-center
    justify-between
    fixed
    top-0
    left-0
    right-0
    px-10
    z-200
    class="site-header"
  >
    <router-link to="/" class="flex items-center text-4">
      <img src="../assets/logo.svg" class="h-40px w-40px mr-4">
      Mist UI
    </router-link>
    <div class="flex text-4 items-center gap-4">
      <router-link
        to="/starter"
        :class="{'site-active-header':router.currentRoute.value.path.startsWith('/starter')}"
      >
        {{ locale === 'en-US'?'Docs':'文档' }}
      </router-link>
      <router-link
        to="/components"
        :class="{'site-active-header':router.currentRoute.value.path.startsWith('/components')}"
      >
        {{ locale === 'en-US'?'Components':'组件' }}
      </router-link>
      <span v-if="locale !== 'zh-CN'" cursor-pointer @click="toggleLang('zh-CN')">中文</span>
      <span v-else cursor-pointer @click="toggleLang('en-US')">English</span>
      <span v-if="isDark" i-carbon-light cursor-pointer @click="onChangeDark" />
      <span v-else i-carbon-moon cursor-pointer @click="onChangeDark" />
      <span i-carbon-logo-github cursor-pointer @click="jumpGithub" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '../componsables/dark'

const { locale } = useI18n({ useScope: 'global' })

const router = useRouter()

const onChangeDark = () => {
  toggleDark()
}
const jumpGithub = () => {
  window.open('https://github.com/mist-ui/mist-ui')
}

const toggleLang = (lang: string) => {
  locale.value = lang
}
</script>

<style lang="less">
.site-header{
  background-color: var(--site-background-color);
  height: 64px;
  box-shadow: var(--site-header-shadow);
  transition: background .3s, box-shadow .3s;
  backdrop-filter: saturate(50%) blur(8px);
}
.site-active-header{
  color: var(--mist-primary-color);
}
</style>
