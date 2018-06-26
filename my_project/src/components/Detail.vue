<template>
	<div class="Detail">
		<p>{{msg}}</p>
		<ul>
			<li>产品介绍</li>
			<li>产品列表</li>
			<li>产品营销</li>
		</ul>

	</div>
</template>

<script>
	export default {
		name: 'Detail',
		data() {
			return {
				msg: 'xx产品官网介绍'
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
	}
	ul{
		width:100%;
		
		margin:0 auto;
		padding:0;
		padding:15px 0;
		display:-webkit-flex;
		background:skyblue;
		color:#fff;
	}
	li{
		-webkit-flex:1;
		border-left:3px solid skyblue;
		cursor: pointer;
	}
	
</style>