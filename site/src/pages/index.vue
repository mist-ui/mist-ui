<template>
  <div class="site-home-page">
    <div flex class="items-center">
      <img src="../assets/logo.svg" class="w-150px h-150px">
      <div class="flex ml-40px" style="flex-direction: column">
        <div class="title">
          Mist UI
        </div>
        <div class="description">
          这是一个基于Vue3的前端组件库
        </div>
        <div class="description mt-4">
          全面拥抱Typescript、国际化、主题定制、深色模式等
        </div>
        <div class="flex">
          <!--      -->
        </div>
      </div>
    </div>
    <div class="flex mt-20px gap-15">
      <m-button @click="onStart">
        快速开始
      </m-button>
      <m-button type="primary" @click="onJumpGit">
        开源贡献
      </m-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onJumpGit = () => {
  // eslint-disable-next-line no-console
  console.log('git')
}
const onStart = () => {
  router.push('/starter')
}
</script>

<style lang="less">
.site-home-page{
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title{
    font-size: 5rem;
    font-weight: 600;
  }
  .description{
    font-size: 1rem;
  }
}
</style>
