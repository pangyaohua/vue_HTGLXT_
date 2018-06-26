<template>
	<div class="productList">
		
		<ul>
			<li v-for="item in dataList">
				<p>{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				"msg":"产品列表简介",
				"dataList":[
					{"name":"vue实例"},
					{"name":"模板语法"},
					{"name":"计算属性与和侦听器"},
					{"name":"class与style绑定"}
				]
			}
		}
	}
</script>

<style>
	.productList{
		padding-top:15px;
	}
	ul{
		margin:0;
		padding:0;
		text-align: left;
	}
	ul li{
		list-style: none;
		width:23%;
		margin-right:1%;
		height:250px;
		display:inline-block;
		background:#2C3E50;
		color:#fff;
	}
	ul li p{
		padding:10px 0;
		text-align: center;
		width:100%;
	}
	
</style>