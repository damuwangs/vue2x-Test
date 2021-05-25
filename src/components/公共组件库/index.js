export default [
    {
      path: '/utilcomponents',
      component: resolve => require(['@/components/公共组件库/index.vue'], resolve),
    },
    {
      path: '/treeselect',
      component: resolve => require(['@/components/公共组件库/1、基于Element-UI的TreeSelect树形选择器/index.vue'], resolve),
    }
  ]