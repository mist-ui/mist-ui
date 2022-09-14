<template>
  <div class="side-menu">
    <menu-item
      v-for="menu in menus"
      :key="menu.path"
      :path="menu.path"
      :title="menu.meta.title"
      :en-title="menu.meta.enTitle"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import MenuItem from './menu-item.vue'
defineProps({
  menus: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
})
</script>

<style scoped lang="less">
.side-menu{
  position: fixed;
  top: 64px;
  padding-top: 10px;
  box-sizing: border-box;
  left: 0;
  width: 240px;
  height: calc(100% - 64px);
  overflow-y: auto;
  background: var(--site-bg-color);
  z-index: 100;
  border-right: 1px solid var(--site-border-color);
  transition: background-color 0.3s ease,border-right-color 0.3s ease;
}
</style>
