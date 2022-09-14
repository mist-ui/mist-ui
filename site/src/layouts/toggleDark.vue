<template>
  <div class="fixed bottom-30 flex items-center transition-all-300 justify-center right-10 bg-gray-100 dark:bg-[#111] w-10 h-10 b-rd-10 shadow-lg" @click="onChangeDark">
    <span v-if="isDark" i-carbon-light text-5 />
    <span v-else i-carbon-moon text-5 />
  </div>
</template>

<script lang="ts" setup>
import { isDark, toggleDark } from '../componsables/dark'

const onChangeDark = () => {
  toggleDark()
}
</script>
