<template>
	<div id="app">
		
		<ul>
			<p>暂无登录，注册页面，headerNav </p>
		</ul>
		<div class="header" style="background: url(image/index/indexbackground.jpg) no-repeat;background-size:100% 100%;">
		</div>
		
		<router-view/>
	</div>
</template>

<script>
	$(function() {
		console.log("引入jquery成功");
	})
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 20px;
	}
</style>