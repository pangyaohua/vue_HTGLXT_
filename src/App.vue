<template>
	<div id="app">
		<p>{{msg}}</p>
		<ul>
			
			<li>产品介绍</li>
			<li>简介，详情</li>
			<li>关于我们</li>
		</ul>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return {
				"msg":"XX公司简介"
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	p{
		width:100%;
		padding-left:25px;
		
	}
	ul {
		width: 100%;
		padding-top: 25px;
		padding-bottom: 25px;
		display: -webkit-flex;
	}
	
	li {
		-webkit-flex: 1;
		height: 100%;
		bordeR: 1px solid #ccc;
	}
</style>