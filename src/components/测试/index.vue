<template>
    <div class="content">
        <h1>测试</h1>
        <h2 @click="toRoutes('tablelazy')">1、Element-table树形数据与懒加载</h2>
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
    },
}
</script>