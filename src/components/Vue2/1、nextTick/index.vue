<template>
    <div class="content">
        <h1>nextTick</h1>
        <ul>
            <li v-for="item in list1" :key="item">{{item}}</li>
        </ul>
        <ul>
            <li v-for="item in list2" :key="item">{{item}}</li>
        </ul>
        <ol>
            <li v-for="item in list3" :key="item">{{item}}</li>
        </ol>
        <ol>
            <li v-for="item in list4" :key="item">{{item}}</li>
        </ol>
        <ol>
            <li v-for="item in list5" :key="item">{{item}}</li>
        </ol>
    </div>
</template>

<script>
import {dateFormat} from '@/components/JS方法库/util/common.js'
export default {
  data () {
        return {
            list1: [],
            list2: [],
            list3: [],
            list4: [],
            list5: []
        }
    },
    created(){
        this.composeList12()
        this.composeList34()
        this.composeList5()
        this.$nextTick(function() {
            // DOM 更新了
            console.log('[7]同步视图更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)
            console.log('——————————同步视图更新完成——————————')
        })
    },
 
    methods: {
        composeList12() {
            for (let i = 0; i < 10000; i++) {
                this.$set(this.list1, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            console.log('——————————开始更新同步数据——————————')
            console.log('[1]同步数据更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)

            for (let i = 0; i < 10000; i++) {
                this.$set(this.list2, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            console.log('[2]同步数据更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)

            this.$nextTick(function() {
                // DOM 更新了
                console.log('[1][2]同步视图更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)
            })
        },
        composeList34() {
            for (let i = 0; i < 10000; i++) {
                this.$set(this.list3, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            console.log('[3]同步数据更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)

            this.$nextTick(function() {
                // DOM 更新了
                console.log('[3]同步视图更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)
            })

            setTimeout(this.setTimeout1, 0)
        },
        setTimeout1() {
            for (let i = 0; i < 10000; i++) {
                this.$set(this.list4, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            console.log('——————————开始更新异步数据——————————')
            console.log('[4]异步数据更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)

            this.$nextTick(function() {
                // DOM 更新了
                console.log('[4]异步视图更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)
            })
        },
        composeList5() {
            this.$nextTick(function() {
                // DOM 更新了
                console.log('[5]同步视图更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)
            })

            setTimeout(this.setTimeout2, 0)
        },
        setTimeout2() {
            for (let i = 0; i < 10000; i++) {
                this.$set(this.list5, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            console.log('[6]异步数据更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)

            this.$nextTick(function() {
                // DOM 更新了
                console.log('[6]异步视图更新 - ' + dateFormat(new Date() ,'yyyy-MM-dd hh:mm:ss'),document.querySelectorAll('li').length)
                console.log('——————————异步视图更新完成——————————')
            })
        },
    }
}
</script>