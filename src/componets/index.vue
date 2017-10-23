<template>
	<div>
		<nav-header></nav-header>
		<article class="content clear-fix">
			<div class="J_navTwo cate_menu fl">
				<ul>
					<li v-for="(item,index) in navLists" @mouseout="pointerOut(index,item.type)"@mouseover="pointerOver(index,item.type,item.parts)"><a  :data-id=index :class="{cate_menu_item_on:index==navIndex}" >{{item.name}}</a></li>
				</ul>
			</div>
			<div class="J_navChild" :class="{ show: isActive, 'unshow': unActive}">
				<ul>
					<li class="J_nav_title fl" v-for="(item,index) in navChildLists" @mouseout="pointerOut1(index,item.index)" @mouseover="pointerOver1(item.index)"><a  >{{item.name}}</a>
						<div class="J_nav_lists">
							<div class="J_nav_names" v-for="(list,index) in item.partstwo">
								<a >{{list.name}}</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<banner></banner>
			<div class="J_user_box fl">
				<div class="user_box">
					<div class="user_info ">
						<p class="user_icon fl"><img :src=userIcon></p>
						<p class="tip_msg fr">{{tip_msg}}</p>
					</div>
					<div class="clear-fix"></div>
				</div>
				<div class="notice_box">
					<div class="notice_cont">
						<div  class="notice_txt">
							<div class="notice_title">
								<div v-for="(item,index) in notices" v-on:mouseover="noticesOver(index,item.lists)"  class="notice_name" v-text=item.name v-bind:class="{on:index==currentIndexs}">
								</div>
							</div>
							<ul>
								<li v-for="(list,index) in noticeslist" >
									<router-link :to="'newDetail/'+index">{{ list.title }}</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</article>
		<hot-list></hot-list>
		<div class="new_pro">
			<div class=""></div>
		</div>
	</div>
</template>
<script>
	import * as httpMethod from '../http.js'
	import NavHeader from "./header"
	import Banner from "./banner"
	import HotList from "./hotList"
	export default{
		data(){
			return{
				navLists:[],
				notices:[],
				noticeslist:[],
				products:[],
				navIndex:-1,
				isActive:false,
				unActive:true,
				currentIndexs:0,
				navChildLists:[],
				userIcon:"",
				tip_msg:""

			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.getNavChild();
				this.getUserInfo();
				this.getProducts();
				this.noticesOver();
			});
		},
		methods:{
			getNavChild:function(){
				const url = "data/navTwo.json";
				const _this = this;
				// const temp = httpMethod.getAPI(url);
				// console.log(temp);
				httpMethod.getAPI(url).then(function(response) {
				  //console.log("Success!", response);
				  //console.log(JSON.parse(response).result);
				  _this.navLists = response.result.list;
				}, function(error) {
				  console.error("Failed!", error);
				})
				// return httpMethod.ApiGet(url)
				// 	.then((res)=>{
				// 		console.log(res)
				// 	})
				// 	.catch((error)=>{
				// 		console.log("error:"+error);
				// 	})
				// this.$http.get('data/navTwo.json').then(res=>{
				// 	this.navLists = res.body.result.list;
				// 	console.log(this.navLists)
				// })
			},
			getUserInfo:function(){
				this.$http.get('data/userInfo.json').then(res=>{
					this.userIcon = res.body.userIcon;
					this.tip_msg = res.body.tip_msg;
					this.notices = res.body.notices;
					this.noticeslist  = res.body.notices[0].lists;
				})
			},
			showArrow:function(param){
				if(param ==1){
					this.arrowFlag = false;
				}else{
					this.arrowFlag = true;
				}
			},
			getProducts:function(){
				this.$http.get('data/products.json').then(res=>{
					this.products = res.body.result;
				})
			},
			noticesOver:function(index,content){
				if(index ==0 || index ==1){
					this.currentIndexs = index;
				}
				this.noticeslist = content;
			},
			addShoppingCart:function(num,prices){
				window.location.href = "shoppingCart.html?num="+num+"&prices="+prices+"";	
			},
			pointerOver:function(index,type,content){
				this.navChildLists = content;
				this.navIndex = index;
				this.isActive = true;
				this.unActive = false;
			},
			pointerOut:function(index,type){
				this.navIndex = -1;
				this.isActive = false;
				this.unActive = true;
			},
			pointerOver1:function(type){
				this.navIndex = type;
				this.isActive = true;
				this.unActive = false;
			},
			pointerOut1:function(){
				this.navIndex = -1;
				this.isActive = false;
				this.unActive = true;
			}
		},
		components: {
			NavHeader,
            Banner,
            HotList
        }
	}
</script>