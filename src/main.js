import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
// import sdk from 'abdp.sdk'
import Vuex from "vuex";

// import abdpConfig from './components/common/config.js';
import cordova from "./components/common/cordova.js";
import "../static/common.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Vuex);
Vue.use(ElementUI);

// 构建全局Ajax对象
// let ajaxManager=new sdk.AjaxManager({BaseUrl:abdpConfig.getApiServerPath()});
// Vue.prototype.abdpAjax=ajaxManager;

// cordovaApp.init()
//cordova放入到vue對象中
Vue.prototype.$cordova = cordova;

// document.addEventListener("deviceready",function(){
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
//     document.addEventListener('jpush.receiveRegistrationId', function (event) {
//       console.log("注册成功>>>")
//       console.log(event.registrationId)
//       console.log("注册成功<<<")
//   }, false)
//   document.addEventListener("jpush.openNotification", function(event){
//     console.log('点击通知跳转')
//     console.log(event.extras)
//   },false)
//   onDeviceReady()
// });
//   function onDeviceReady() {
//     initJPush();
//     }
//     function initJPush(){
//     if ('JPush' in window) {
//     console.log('initialize JPush...');
//     try {
//     window.JPush.init();
//     window.JPush.setDebugMode(true);
//     window.setTimeout(() => {
//     window.JPush.getRegistrationID((data) => {
//     console.log(data);
//     console.log('JPush initialize successful...');
//     });
//     }, 1000);
//     if (device.platform != "Android") {
//     window.JPush.setApplicationIconBadgeNumber(0);
//     }
//     } catch (exception) {
//     console.log(exception);
//     }
//     } else {
//     console.error('JPush is not exist...');
//     }
//     }
