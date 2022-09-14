<template>
  <side-menu :menus="menus" />
  <div class="pl-240px">
    <container>
      <router-view />
    </container>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import docs from '../routes/docs'
import comps from '../routes/components'
import SideMenu from './side-menu.vue'
import Container from './container.vue'

const router = useRouter()
const menus = computed(() => {
  const current = router.currentRoute.value.path
  if (current.startsWith('/components'))
    return comps
  return docs
})
</script>

<style scoped lang="less">

</style>
