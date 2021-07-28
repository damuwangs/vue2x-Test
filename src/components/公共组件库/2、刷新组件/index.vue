<template>
    <div class="content">
        <h1>刷新组件</h1>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <son></son>
        <el-button type="primary" @click="forceUpdateClick">属性组件</el-button>
    </div>
</template>

<script>
import son from '@/components/公共组件库/2、刷新组件/son.vue'
export default {
    components:{son},
    data () {
        return {
            input:'默认值'
        }
    },
    methods: {
        forceUpdateClick() {
            this.input = '变了'
            this.$forceUpdate()
        }
    }
}
</script>