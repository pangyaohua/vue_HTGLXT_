<template>
	<div>
		<p>{{msg}}</p>
		<ul>
			
			<li>
				<button><a href="#/sence">登录</a></button>
				<button>注册</button>
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				msg: '--vue--'
			}
		}
	}
</script>

<style>
	ul li {
		list-style: none;
	}
</style>