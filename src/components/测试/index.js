export default [
    {
      path: '/test',
      component: resolve => require(['@/components/测试/index.vue'], resolve),
    },
    {
      path: '/tablelazy',
      component: resolve => require(['@/components/测试/1、Element-table树形数据与懒加载/index.vue'], resolve),
    }
  ]