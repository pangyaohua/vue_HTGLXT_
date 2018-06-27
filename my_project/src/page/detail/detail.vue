<template>
	<div class="Detail">
		<p>{{msg}}</p>

		<div class="content">
			<router-link to="/detail/productDetail">
				<span v-bind:class="{active:productDetailIsActive}" @click="productDetailChange">产品介绍</span>
			</router-link>

			<router-link to="/detail/productList">
				<span v-bind:class="{active:productListIsActive}" @click="productListChange">产品列表</span>
			</router-link>

			<router-link to="/detail/productAbout">
				<span v-bind:class="{active:productAboutIsActive}" @click="productAboutChange">联系我们</span>
			</router-link>

		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				"msg": "XX产品官网介绍",
				"productDetailIsActive":false,
				"productListIsActive":false,
				"productAboutIsActive":false
			}
		},
		methods:{
			//---设置导航样式，太复杂，先熟悉，之后优化
			productDetailChange(){
				if(this.productDetailIsActive){
					this.productDetailIsActive=false;
				}else{
					this.productDetailIsActive=true;
					this.productListIsActive=false;
					this.productAboutIsActive=false;
				}
			},
			productListChange(){
				if(this.productListIsActive){
					this.productListIsActive=false;
				}else{
					this.productListIsActive=true;
					this.productDetailIsActive=false;
					this.productAboutIsActive=false;
				}
			},
			productAboutChange(){
				if(this.productAboutIsActive){
					this.productAboutIsActive=false;
				}else{
					this.productAboutIsActive=true;
					this.productDetailIsActive=false;
					this.productListIsActive=false;
				}
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
		background:skyblue;
		color:#fff;
	}
	.content a{
		-webkit-flex:1;
		color:#fff!important;
	}
	.content a span{
		display:inline-block;
		padding:15px 10px;
	}
	.active{
		background:darkslateblue;
		display:inline-block;
		color:fff;
	}
</style>