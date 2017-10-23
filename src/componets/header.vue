<template>
	<header class="header">
		<div class="menu">
			<div class="logo fl">
				<a href="#/index"><img :src=logoSrc></a>
			</div>
			<nav-menu></nav-menu>
			<div class="J_user_box">
				<div :class="{unshow:isAccout}">
					<span class="btn-sn" ><a v-text="'欢迎用户,' + $store.state.userInfo.username"></a></span>
					<span href="javascript:;" class="btn-sn logout"  @click="logout" ><a href="#/login">logout</a></span>
				</div>
				<div :class="{unshow:islogin}">
					<span class="btn-sn login"><a href="#/login">登陆</a></span>
					<span class="btn-sn register"><a href="#/register">注册</a></span>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		data(){
			return{
				islogin:true,
				isAccout:true,
				logoSrc:"",
				userInfo: { 
					username: "",
					password: ""
				}
			}
		},
		mounted:function(){
			
			this.$nextTick(()=>{
				this.getLogoUrl();
				this.getUserInfo();
			});
		},
		methods:{
			getLogoUrl(){
				this.$http.get("data/menu.json").then(res=>{
					this.logoSrc = res.body.logo;
				})
			},
			logout(){
				this.isLogouting = true;
		      	this.delCookie('session');
			      //演示
		      	setTimeout(()=>{
		      		//this.$router.push("/#index")
			        this.isLogouting = false;
		      	},1000)
			},
			getUserInfo(){
		      //发送http请求获取，这里目前写死作演示 本身应该向服务发请求 输出用户信息

		      // this.userInfo = {
		      //   username: 'Doterlin',
		      //   password: 21111110,
		      // }
		      // this.$store.commit('updateUserInfo', this.userInfo); 
		      //console.log($store.state.userInfo);
		      if(!this.getCookie('session')){
		      	this.islogin = false;
		      	this.isAccout = true;
		      }else{
		      	this.islogin = true;
		      	this.isAccout = false;
		      }
		      console.log(this.getCookie('session'));
		    }
		},
		components: {
            'nav-menu': require('./menu.vue')
        }
	}
</script>