export default [
  {
    path: "/test",
    component: () => import("@/components/测试/index.vue")
  },
  {
    path: "/tablelazy",
    component: () =>
      import("@/components/测试/1、Element-table树形数据与懒加载/index.vue")
  }
];
