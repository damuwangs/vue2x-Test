<template>
    <div class="content">
        <h1>- 自定义指令</h1>
        <div>说明：页面加载时，该元素将获得焦点</div>
        <input v-focus>
        <h1>- 带参数的自定义指令</h1>
        <div>说明：动态固定元素fixed方向和px距离</div>
        <p v-pin:right = '20'>I am pinned onto the page at 200px to the left.</p>
        <h1>- 防抖</h1>
        <el-button type="primary" v-throttle="debounce">2秒内只触发一次方法</el-button>
    </div>
</template>

<script>
import son from '@/components/公共组件库/2、刷新组件/son.vue'
export default {
    components:{son},
    data () {
        return {
            input:'默认值',
        }
    },
    methods: {
        debounce() {
          console.log('防抖触发');
        }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      },
      pin: {
        bind: function (el, binding, vnode) {
          el.style.position = 'fixed'
          console.log('binding = ', binding.arg);
          el.style[binding.arg] = binding.value + 'px'
        }
      },
      throttle : {
        inserted: function (el, binding) {
          let timmer = true;
          el.addEventListener("click", () => {
            if (timmer) {
              binding.value();
              timmer = false;
              setTimeout(() => {
                timmer = true
              }, 2000)
            }
          })
        }
      }
    }
}
</script>