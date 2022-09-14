import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../locales/i18n'
import components from './components'
import docs from './docs'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../layouts/layout.vue'),
      children: docs,
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../layouts/layout.vue'),
      redirect: '/components/button',
      children: components,
    },
  ],
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'auto' }
    else
      return { top: 0, behavior: 'auto' }
  },
})

router.beforeEach((to) => {
  if (to.meta?.title || to.meta?.enTitle) {
    const locale = i18n.global.locale.value
    const title = locale === 'en-US' ? (to.meta.enTitle ?? to.meta.title) : (to.meta.title ?? to.meta.enTitle)
    document.title = `${title} | Mist Design`
  }
  else {
    document.title = 'Mist Design'
  }
})

export default router
