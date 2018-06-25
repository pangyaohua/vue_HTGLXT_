import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import sence from "@/components/sence"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:"/sence",
    	name:"sence",
    	component:sence
    }
  ]
})
