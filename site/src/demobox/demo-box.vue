<template>
  <div :id="id" class="demo-box">
    <div v-if="title" class="title">
      {{ title }}
    </div>
    <div v-if="description" class="description text-gray-600 dark:text-gray-200" v-html="description" />
    <div class="demo-box-wrapper">
      <component :is="comp" />
    </div>
    <div v-if="highlight" class="demo-box-actions text-gray-500 dark:text-gray-500" :class="!isOpen?'demo-box-action-open':''">
      <span v-if="sandbox" i-carbon-flash-filled cursor-pointer />
      <span i-carbon-logo-github cursor-pointer />
      <span v-if="!isCopy" i-carbon-copy cursor-pointer @click="onCopy" />
      <span v-else i-carbon-checkmark class="check-mark" />
      <span i-carbon-code cursor-pointer @click="onOpen" />
    </div>
    <template v-if="highlight">
      <transition>
        <div v-show="isOpen" class="demo-box-code" v-html="highlight" />
      </transition>
    </template>
  </div>
</template>

<script lang="ts" setup>
import demos from 'virtual:mist-docs'
import { computed, defineAsyncComponent, shallowRef } from 'vue'
import { get } from '@mistjs/lodash'
import { useI18n } from 'vue-i18n'
import { useClipboard } from '../componsables/clipboard'

const { locale: lang } = useI18n()
const props = defineProps<{
  src: string
  sandbox?: string
}>()
const isOpen = shallowRef(false)

const isCopy = shallowRef(false)
const onOpen = () => {
  isOpen.value = !isOpen.value
}

const demo = computed<any>(() => demos[props.src])
const title = computed(() => {
  if (demo.value.title) {
    if (typeof demo.value.title === 'string')
      return demo.value.title

    else
      return get(demo.value.title, lang.value)
  }
  return ''
})
const description = computed(() => {
  if (demo.value.description) {
    if (typeof demo.value.description === 'string')
      return decodeURIComponent(demo.value.description)
    else
      return decodeURIComponent(get(demo.value.description, lang.value) || '')
  }
  return ''
})
const comp = computed(() => defineAsyncComponent(demos[props.src].comp))
const source = computed(() => decodeURIComponent(demo.value.source || ''))
const highlight = computed(() => decodeURIComponent(demo.value.highlight || ''))
const id = computed(() => {
  const { src } = props
  const srcText = src.replace('.vue', '')
  const arr = srcText.split('/').filter(v => !!v)
  return arr.join('-')
})
const onCopy = () => {
  useClipboard(source.value)
  isCopy.value = !isCopy.value
  const timer = setTimeout(() => {
    isCopy.value = false
    clearTimeout(timer)
  }, 2000)
}
</script>

<style lang="less" scoped>
.check-mark{
  color: var(--mist-primary-color)
}
</style>
