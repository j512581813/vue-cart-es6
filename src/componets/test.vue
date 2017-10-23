<template>
	<div>
		<el-alert
		title="成功提示的文案"
		type="success"
		closeText="关闭1"
		discription="文字说明文字说明文字说明文字说明文字说明文字说明">
		</el-alert>
		<el-alert
		title="消息提示的文案"
		type="info"
		closeText="关闭2"
		discription="文字说明文字说明文字说明文字说明文字说明文字说明">
		</el-alert>
		<el-alert
		title="警告提示的文案"
		type="warning"
		closeText="关闭3"
		discription="文字说明文字说明文字说明文字说明文字说明文字说明"
		>
		</el-alert>
		<el-alert
		title="错误提示的文案"
		type="error"
		discription="文字说明文字说明文字说明文字说明文字说明文字说明"
		closeText="关闭4"
		@close = "test"
		>
		</el-alert>
	</div>
</template>
<script>
	import ElAlert from "./ElAlert.vue"
	export default{
		data(){
			return{
				message:"测试回调方法"
			}
		},
		components:{
			ElAlert
		},
		methods:{
			test(){
				alert(this.message);
			}
		}
	}
</script>
<style type="text/css">
	.el-alert-warning{
		display: block;
		width: 200px;
		line-height: 30px;
		background-color: #f7ba2a;
		color: red;
	}
	.el-alert-success{
		display: block;
		width: 200px;
		line-height: 30px;
		background-color: #f7ba2a;
		color: yellow;
	}
	.el-alert-error{
		display: block;
		width: 200px;
		height: 30px;
		line-height: 30px;
		background-color: #f7ba2a;
		color: blue;
	}
</style>
