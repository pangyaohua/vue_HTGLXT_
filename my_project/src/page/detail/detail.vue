<template>
	<div class="Detail">
		<p>{{msg}}</p>

		<div class="content">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">

				<el-menu-item index="1">
					<router-link to="/detail/productDetail">产品介绍</router-link>
				</el-menu-item>

				<el-submenu index="2">
					<template slot="title">我的工作台</template>
					<el-menu-item index="2-1">
						<router-link to="/detail/myWork" @click="this.componnet1=true">
							组件
						</router-link>
					</el-menu-item>
					<el-menu-item index="2-2">
						<router-link to="/detail/myWork">
							组件详情
						</router-link>
					</el-menu-item>
					<el-menu-item index="2-3">
						<router-link to="/detail/myWork">
							element-ui
						</router-link>
					</el-menu-item>
					<!--<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项1</el-menu-item>
						<el-menu-item index="2-4-2">选项2</el-menu-item>
						<el-menu-item index="2-4-3">选项3</el-menu-item>
					</el-submenu>-->
				</el-submenu>

				<el-menu-item index="3">
					<router-link to="/detail/productList">
						产品列表
					</router-link>
				</el-menu-item>

				<el-menu-item index="4">

					<router-link to="/detail/productAbout">
						联系电话
					</router-link>

				</el-menu-item>
			</el-menu>
			<div class="line"></div>

		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				"msg": "XX产品官网介绍",
				"activeIndex": '1',
				"activeIndex2": '1',
				"componnet1":false,
				"componnet2":false,
				"element-ui":false
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul li {
		width: 25%;
	}
	ul li a{
		display:inline-block;
		width:100%;
		height:100%;
	}
</style>