<template>
  <router-link
    cursor-pointer
    class="p-2 pl-8 flex items-center"
    :class="{'menu-item-active':path === activePath}" :to="path"
  >
    {{ myTitle }}
  </router-link>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const props = defineProps({
  path: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    default: undefined,
  },
  enTitle: {
    type: String as PropType<string>,
    default: undefined,
  },
})

const { locale } = useI18n()

const myTitle = computed(() => {
  if (locale.value === 'en-US')
    return props.enTitle ? props.enTitle : props.title

  return props.title
},
)

const router = useRouter()
const activePath = computed(() => router.currentRoute.value.path)
</script>

<style lang="less">
.menu-item-active{
  background-color: var(--site-primary-1);
  color: var(--mist-primary-color);
}
</style>
