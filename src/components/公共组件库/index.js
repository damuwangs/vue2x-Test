export default [
  {
    path: "/utilcomponents",
    component: () => import("@/components/公共组件库/index.vue")
  },
  {
    path: "/treeselect",
    component: () => import("@/components/公共组件库/1、基于Element-UI的TreeSelect树形选择器/index.vue")
  },
  {
    path: "/refresh",
    component: () => import("@/components/公共组件库/2、刷新组件/index.vue")
  },
  {
    path: "/nextTick",
    component: () => import("@/components/公共组件库/3、nextTick/index.vue")
  }
]
