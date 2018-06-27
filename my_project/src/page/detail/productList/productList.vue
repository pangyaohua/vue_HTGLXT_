<template>
	<div class="productList">
		<p class="left" @click="add"><button>新加</button></p>
		<ul>

			<li v-for="(item,index) in dataList">
				<p>{{index}}-{{item.name}}</p>
				<span @click="edit(index)">编辑</span>
			</li>
		</ul>
		<!--<p class="left" @click="loadMore"><button>加载更多</button></p>-->
		<div class="shadeBox" v-bind:class="{hidden:shadeBoxIsShow}">
			<p>请输入要添加板块的标题</p>
			<p>
				<input type="text" v-model="title" placeholder="请输入您要添加的标题" />
				<br />
				<button v-bind:class="{hidden:isSubmit}" @click="submit">提交</button>
				<button v-bind:class="{hidden:isEdit}" @click="save">保存编辑</button>
			</p>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	
	export default {
		data() {
			return {
				"msg": "产品列表简介",
				"title": "",
				"shadeBoxIsShow": true,
				"isSubmit": false,
				"isEdit": true,
				"editIndex": "",
				"dataList": [
					{ "name": "vue实例" },
					{ "name": "模板语法" },
					{ "name": "计算属性与和侦听器" },
					{ "name": "class与style绑定" }
				]
			}
		},
		methods: {
			add() {

				this.shadeBoxIsShow = false;
				this.isEdit = true;
				this.isSubmit = false;
			},
			submit() {

				this.shadeBoxIsShow = true;
				console.log(this.title);
				this.dataList.push({ "name": this.title });
				this.title = "";
			},
			save() {
				this.dataList[this.editIndex].name = this.title;
				this.shadeBoxIsShow = true;
				this.title = "";
			},
			edit(val) {
				console.log(val);
				//--编辑标题
				this.shadeBoxIsShow = false;
				this.editIndex = val;
				this.isEdit = false;
				this.isSubmit = true;

			}
			//----axios-加载更多数据----测试
			/*loadMore() {
				axios.get('http://10.63.106.134:8082/sdzyV2/drafts/findPersonByFourChannel.do',{
					params:{
						"fourChannel":"Q86040004"
					}
				})
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
			}*/
		}
	}
</script>

<style>
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	.productList {
		padding-top: 15px;
	}
	
	.productList ul {
		margin: 0;
		padding: 0;
		text-align: left;
	}
	
	.productList p {
		width: 100%;
		text-align: center;
	}
	
	p.left {
		text-align: left;
		padding-left: 30px;
	}
	
	ul li {
		list-style: none;
		width: 23%;
		margin-right: 1%;
		height: 250px;
		display: inline-block;
		background: #2C3E50;
		color: #fff;
		margin-bottom: 10px;
		text-align: center;
	}
	
	ul li p {
		padding: 10px 0;
		text-align: center;
		width: 100%;
	}
	
	ul li span {
		width: 30%;
		text-align: center;
		display: inline-block;
		background: darkslateblue;
		background: #fff;
		padding: 8px 0;
		color: skyblue;
		cursor: pointer;
	}
	
	.shadeBox {
		width: 50%;
		height: 30%;
		border: 1px solid skyblue;
		border-radius: 10px;
		background: #fff;
		opacity: 1;
		position: fixed;
		top: 28%;
		left: 25%;
	}
	
	.shadeBox p {
		width: 50%;
		padding: 10px 0;
		margin: 0 auto;
	}
	
	.shadeBox p button {
		padding: 5px 0;
		width: 30%;
		bordeR: none;
		margin-top: 10px;
		background: skyblue;
		color: #fff;
	}
	
	.hidden {
		display: none;
	}
</style>