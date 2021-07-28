<template>
  <div class="content">
    <h1>总结</h1>
    <h2 @click="toRoutes('utiljs')">- JS方法库</h2>
    <h2 @click="toRoutes('utilcomponents')">- 公共组件库</h2>
    <h2 @click="toRoutes('directive')">- 自定义指令</h2>
    <h2 @click="toRoutes('cordova')">- cordova插件</h2>
    <h2 @click="toRoutes('elementui')">- ElementUI</h2>
    <h2 @click="toRoutes('test')">测试</h2>
    <i class="iconfont icon-qiyeguanli"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    toRoutes(path) {
      this.$router.push({ path: path });
    },
  }
}
</script>
