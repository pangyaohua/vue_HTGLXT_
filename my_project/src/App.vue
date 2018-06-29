<template>
	<div id="app">
		<ul>
			<p>暂无登录，注册页面，headerNav </p>
		</ul>
		<div class="header" style="background: url(image/index/indexbackground.jpg) no-repeat;background-size:100% 100%;">
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
						<a class="navbar-brand" href="index.html"><img src="image/diandian.png" style="height: 0.5rem" alt="" /></a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="active1">
								<a href="index.html">首页 <span class="sr-only">(current)</span></a>
							</li>
							<li>
								<a href="html/advantage.html">产品优势</a>
							</li>
							<li>
								<a href="html/cooperation.html">商务合作</a>
							</li>
							<li>
								<a href="html/DownLoad.html">APP下载</a>
							</li>
							<li>
								<a href="html/Join.html">加入我们</a>
							</li>
							<li>
								<a href="html/address.html">关于我们</a>
							</li>
						</ul>

					</div>
				</div>
			</nav>

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