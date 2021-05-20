<template>
  <div class="content">
		  <h1>总结</h1>
		  <h2 @click="toRoutes('cordova')">1、cordova插件</h2>
		  <h2 @click="toRoutes('elementui')">2、ElementUI</h2>
		  <h2 @click="toRoutes('vue3')">3、Vue3</h2>
		  <h2 @click="toRoutes('utiljs')">JS方法库</h2>
		  <h2 @click="toRoutes('utilcomponents')">公共组件库</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created(){
  },
  methods: {
    toRoutes(path){
      this.$router.push({ path: path})
    }
  }
}
</script>
