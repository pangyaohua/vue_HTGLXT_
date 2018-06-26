<template>
	<div>
		<p>{{msg}}</p>
		<input type="text" placeholder="请输入用户名" v-model="userName" />
		<input type="password" placeholder="请输入密码" v-model="pwd" />
		<button>注册</button>
		<button @click="login">登录</button>
	</div>
</template>

<script>
	export default {
		"name": "login",
		data() {
			return {
				userName: "admin",
				pwd: "123456",
				msg: "showTime"
			}
		},
		methods:{
			login(){
				alert(this.pwd);
				if(this.userName=="" || this.pwd==""){
					//---提示用户名与密码为必填项
					alert("输入用户名与密码");
				}else{
					//--路由跳转，
					this.$router.push('/detail')
				}
			}
		}
	}
</script>

<style>

</style>