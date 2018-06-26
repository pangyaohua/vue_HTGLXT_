import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/login"
import Detail from "../page/detail"

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: "/detail",
			name: "",
			component: Detail,
			children: [
				{ path: 'productDetail', name: "产品介绍", component: Detail.productDetail },
				{ path: 'productList', name: "产品列表", component: Detail.productList },
				{ path: 'productAbout', name: "关于我们", component: Detail.productAbout }
			]
		}
	]
})