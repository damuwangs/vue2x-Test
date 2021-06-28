<template>
    <div class="content">
        <h1>Vue2</h1>
        <h2 @click="toRoutes('nextTick')">1、Vue.nextTick</h2>
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
    },
}
</script>