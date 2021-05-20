import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cordova from '@/components/1、cordova插件'
import elementui from '@/components/2、ElementUI'
import vue3 from '@/components/3、Vue3'
import utiljs from '@/components/JS方法库'
import utilComponents from '@/components/公共组件库'

Vue.use(Router)
let routesArray = [{
	path: '/',
	component: HelloWorld, 
}]

routesArray.push(...cordova)
routesArray.push(...elementui)
routesArray.push(...vue3)
routesArray.push(...utiljs)
routesArray.push(...utilComponents)


let MainRouter = new Router({
	routes: routesArray
})

export default MainRouter