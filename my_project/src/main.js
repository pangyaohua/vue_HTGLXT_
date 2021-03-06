// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import $ from "jquery"
import headerNav from '@/components/header_nav'
//全局样式表
import indexSheet from "./assets/index.css"

Vue.config.productionTip = false
Vue.use(headerNav)
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
