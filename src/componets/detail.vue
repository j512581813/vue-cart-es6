<template>
	<div>
		<nav-header></nav-header>
		<article class="content J_productDetial clear-fix">
			<sidebar></sidebar>
			<div class="J_product_mid fl">
				<div class="product_img fl">
					<img :src=ProductImageUrl>
				</div>
				<div class="product_detial fr">
					<h3 v-text=productDesc.title></h3>
					<i class="detail_desc" v-text=productDesc.desc></i>
					<div class="prices">
						折扣价：<b>{{productDesc.prices|moneyDetail}}</b>原价:<em>{{productDesc.disacount|moneyDetail}}</em>
					</div>
					<div class="heavy">重量：{{productDesc.heavy|formatHeavy}}</div>
					<div class="types">
						<div class="type_title fl">选择颜色</div>
						<div class="choose_type fl">
							<ul>
								<li v-for="(item,index) in productDesc.types" v-bind:class="{type_on:index==chooseIndex}"  @click="chooseType(index)">
									<div class="li_img fl"><img :src=item.url></div>
									<div class="li_intro fl">{{item.name}}</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="choose_num clear-fix">
							<div class="choose fl">数量</div>
							<div class="btn increase fl" @click="increase()">-</div>
							<div class="num fl" ><input @change="changeNum()" type="text" v-model=chooseNum></div>
							<div class="btn add fl" @click="add()">+</div>
							<button class="btn btn_s2" @click="addShoppingCart(chooseNum,productDesc.prices)">添加购物车</button>
					</div>
				</div>
			</div>
		</article>
		<hot-list></hot-list>
	</div>
</template>
<script>
	import navHeader from "./header"
	import sidebar from "./side"
	import hotList from "./hotList"
	export default{
		data(){
			return{
				ProductImageUrl: "",
				productDesc: "",
				chooseIndex:0,
				chooseNum:1
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.getDetialData();
			})
		},
		methods:{
			getDetialData(){
				this.$http.get("data/detial.json").then(res=>{
					if(res.body.code == 200){
						this.ProductImageUrl = res.body.productImage;
						this.productDesc = res.body.productDesc;
					}
				});
			},
			chooseType(index){
				this.chooseIndex = index;
			},
			add(){
				if(this.chooseNum<999){
					this.chooseNum++;
				}else{
					this.chooseNum = 999;
				}
			},
			increase(){
				if(this.chooseNum>1){
					this.chooseNum--;
				}else{
					this.chooseNum==1;
				}
			},
			changeNum(){
				if(this.chooseNum>999){
					this.chooseNum =999;
				}
				if(this.chooseNum<1){
					this.chooseNum = 1;
				}
			},
			addShoppingCart(){
				let href  = window.location.href;
				let url = href.split("#")[0];
				window.location.href = url + "#/shopcart";
			}
		},
		components:{
			sidebar,
			hotList,
			navHeader
		}
	}
</script>