export default [
  {
    path: "/vue2",
    component: () => import("@/components/Vue2/index.vue")
  },
  {
    path: "/nextTick",
    component: () => import("@/components/Vue2/1、nextTick/index.vue")
  },
  {
    path: "/refresh",
    component: () => import("@/components/Vue2/2、刷新组件/index.vue")
  }
]
