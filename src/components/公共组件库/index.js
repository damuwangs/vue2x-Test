export default [
  {
    path: "/utilcomponents",
    component: () => import("@/components/公共组件库/index.vue")
  },
  {
    path: "/treeselect",
    component: () => import("@/components/公共组件库/1、基于Element-UI的TreeSelect树形选择器/index.vue")
  }
]
