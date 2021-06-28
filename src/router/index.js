import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import cordova from "@/components/cordova插件/index.js";
import elementui from "@/components/ElementUI/index.js";
import vue2 from "@/components/Vue2/index.js";
import vue3 from "@/components/Vue3/index.js";
import utiljs from "@/components/JS方法库/index.js";
import utilComponents from "@/components/公共组件库/index.js";
import test from "@/components/测试/index.js";

Vue.use(Router);
let routesArray = [
  {
    path: "/",
    component: home
  }
];

routesArray.push(...cordova);
routesArray.push(...elementui);
routesArray.push(...vue2);
routesArray.push(...vue3);
routesArray.push(...utiljs);
routesArray.push(...utilComponents);
routesArray.push(...test);

let MainRouter = new Router({
  mode: "history",
  routes: routesArray
});

export default MainRouter;
