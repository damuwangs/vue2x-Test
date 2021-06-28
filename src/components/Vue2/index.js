export default [
  {
    path: "/vue2",
    component: () => import("@/components/Vue2/index.vue")
  },
  {
    path: "/nextTick",
    component: () => import("@/components/Vue2/1、nextTick/index.vue")
  }
]
