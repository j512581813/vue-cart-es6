<template>
	<div>
		<header class="login_header">
			<div  class="login_head">
				<a href="#/index"><div class="login_logo"></div></a>
			</div>
			<b></b>
		</header>
		<article class="content clear-fix">
			<div class="login_wrap">
				<div class="login_box">
					<div class="J_loginBox">
						<div class="login_title"><h3>密码登陆</h3></div>
						<div class="login_form">
							<div class="login_txt login_username">
								<label class="login_babel name_babel"></label>
								<input type="text" name="username" class="itxt" placeholder="会员名" v-model="username">
							</div>
							<div class="login_txt login_pwd">
								<label class="login_babel pwd_babel"></label> 
								<input type="password" name="pwd" class="itxt" v-model="password">
							</div>
							<p class="forget_pwd"><a>忘记密码</a></p>
							<div class="login_btn">
								<button class="login" @click="loginForm()">登陆</button>
							</div>
						</div>
					</div>
					<div class="register_wrap">
						<ul>
							<li>
								<a>
									<i class="QQ-icon"></i>
									<b>QQ</b>
								</a>
							</li>
							<li>
								<span>|</span>
							</li>
							<li>
								<a>
									<i class="WX-icon"></i>
									<b>微信</b>
								</a>
							</li>
							<li class="register">
								<a class="" href="#/register">免费注册</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</article>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	import navHeader from "./header.vue"
	import footerBar from "./footer.vue"
	import hookForm from 'vue-hook-form'
	export default{
		data(){
			return{
				islogin:false,
				username:"",
				password:""
			}
		},
		mounted(){
			this.checkLogin();
		},
		methods:{
			checkLogin(){
				if(this.getCookie('session')){
					console.log("username:"+$store.state.userInfo.username);
					
				}
			},
			loginForm(){
				let userInfo = {
					username : this.username,
					password : this.password
				};
				if(this.username!==""&&this.password!==""){
					this.toLogin();
					this.$store.commit('updateUserInfo', userInfo); 
				}
			},
			toLogin(){
				let param = {
					username : this.username,
					password : this.password
				};
				this.islogin = true;
				setTimeout(()=>{
					let expireDays = 1000 * 60 * 60 * 24 * 15;
  					this.setCookie('session', param, expireDays);
  					this.islogin = false;
  					this.$router.push("/#index");
				},1000);
			}
		},
		components:{
			navHeader,
			footerBar,
			hookForm
		}
	}
</script>