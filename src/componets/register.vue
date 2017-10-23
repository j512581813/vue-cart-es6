<template>
	<div>
		<header class="login_header">
			<div  class="login_head">
				<div class="login_logo fl"></div>
				<div class="login_title">欢迎注册</div>
				<div class="have-account fr"><i>已经账号？</i><a href="#/login">请登录</a></div>
			</div>
		</header>
		<article class="content clear-fix">
			<div class="reg_form fl">
				<div class="form-item form-item-account">
					<label>用户名</label>
					<input type="text" name="account" class="filed" placeholder="请输入您的用户名">
				</div>
				<div class="form-item form-item-pwd">
					<label>设置密码</label>
					<input type="password" name="pwd" class="filed" placeholder="请输入您设置密码">
				</div>
				<div class="form-item form-item-setpwd">
					<label>确认密码</label>
					<input type="password" name="pwd" class="filed" placeholder="请再次输入您的密码">
				</div>
				<div class="form-item form-item-phone"> 
					<label>手机号码</label>
					<input type="text" name="phone" class="filed" placeholder="请输入您的手机号码">
				</div>
				<div class="form-item form-item-code">
					<label>验证码</label>
					<input type="text" name="code" class="filed">
				</div>
				<div class="form-item form-agree noBorder">
					<p></p>
					<button class="register_btn">注册</button>
				</div>
			</div>
			<div class="reg-other fl">
				<div class="company-reg">
					<a href="" class="">
						<i class="icon icon_company"></i>
						<span>企业用户注册</span>
					</a>
				</div>
				<div class="inter-cust">
					<a  href="">
						<i class="icon icon_inter"></i>
						<span>INTERNATIONAL<br/>CUSTOMERS</span>
					</a>
				</div>
			</div>
		</article>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	import footerBar from "./footer.vue"
	export default{
		data(){
			return{

			}
		},
		mounted(){

		},
		methods:{

		},
		components:{
			footerBar
		}
	}

</script>