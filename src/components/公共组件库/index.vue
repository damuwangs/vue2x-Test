<template>
    <div class="content">
        <h1>公共组件库</h1>
        <h2 @click="toRoutes('treeselect')">1、基于Element-UI的TreeSelect树形选择器</h2>
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