export default [
  {
    path: '/components/button',
    name: 'button',
    component: () => import('../pages/components/button/index.vue'),
    meta: { title: 'Button 按钮', enTitle: 'Button' },
  },
  {
    path: '/components/space',
    name: 'space',
    component: () => import('../pages/components/space/index.vue'),
    meta: { title: 'Space 间距', enTitle: 'Space' },
  },
  {
    path: '/components/modal',
    name: 'modal',
    component: () => import('../pages/components/modal/index.vue'),
    meta: { title: 'Modal 对话框', enTitle: 'Modal' },
  },
]
