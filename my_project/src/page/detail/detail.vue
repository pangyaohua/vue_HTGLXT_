<template>
	<div class="Detail">
		<p>{{msg}}</p>

		<div class="content">
			<router-link to="/detail/productDetail">
				<span>产品介绍</span>
			</router-link>

			<router-link to="/detail/productList">
				<span>产品列表</span>
			</router-link>

			<router-link to="/detail/productAbout">
				<span>联系我们</span>
			</router-link>

		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				"msg": "XX产品官网介绍"
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
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
		display: inline-block;
	}
	.content{
		width:100%;
		display:-webkit-flex;
		padding:15px 0;
		background:skyblue;
		color:#fff;
	}
	.content a{
		-webkit-flex:1;
		color:#fff!important;
	}
</style>