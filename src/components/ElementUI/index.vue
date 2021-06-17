<template>
    <div class="content">
        <h1>ElementUI</h1>
        <h2 @click="toRoutes('elementForm')">1、Form表单</h2>
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
        toRoutes(path) {
            this.$router.push({ path: path });
        }
    }
}
</script>