<template>
	<div>
		<nav-header></nav-header>
		<article class="content J_products clear-fix">
			<sidebar></sidebar>
			<div class="shop_cart fl">
				<ul>
					<li v-for="(item,index) in cartLists">
						<div class="cart_item cart_item_button radio" :class="{'radio_on':item.checked}" @click="productSelect(item)"></div>
						<div class="cart_item cart_item_img"><img :src=item.url></div>
						<div class="cart_item cart_item_name"><p >{{item.productName}}</p></div>
						<div class="cart_item cart_item_price"><p>{{item.prices|chooseRMB('元')}}</p></div>
						<div class="cart_item cart_item_pars">
							<dl>
								<dt>赠品</dt>
								<dd v-for="(item,index) in item.parts">{{item.partName}}</dd>
							</dl>
						</div>
						<div class="cart_item cart-item-quentity">
		                    <div class="select-self select-self-open">
		                        <div class="quentity">
		                            <a href="javascript:;" @click="increase(item)">-</a>
		                            <input type="text" value="0" disabled v-model=item.productQuentity>
		                            <a href="javascript:;" @click="add(item)">+</a>
		                        </div>
                			</div>
                    		<div class="cart-item-stock"></div>
						</div>
						<div class="cart_item cart_item_total">
							<div class="cart-item-price-total">{{item.prices*item.productQuentity | money}}</div>
						</div>
						<div class="cart_item cart_item_del">
							<div @click="deleteProductModal(index)">删除</div>
						</div>
					</li>
				</ul>
				<div class="cart_foot_wrap clear-fix">
					<div class="cart_foot_left">
						<div class="radio selectAll fl" :class="{'radio_on': isCheckAll}" @click=selectAll(true)>全选</div>
						<div class="cancelled fl" @click="selectAll(false)">取消全选</div>
					</div>
					<div class="cart_foot_right fr">
						<div class="total_prices">总价：{{totalPrice| money}}</div>
						<button class="btn btn_s2">结算</button>
					</div>
				</div>
			</div>
		</article>
	</div>
</template>
<script>
	import navHeader from "./header"
	import sidebar from "./side"
	import hotList from "./hotList"
	export default{
		data(){
			return{
				cartLists:"",
				isCheckAll: false,
				totalPrice:0
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.getShopCarts();
			});
		},
		methods:{
			getShopCarts(){
				this.$http.get('data/cartList.json').then(res=>{
					if(res.body.code == 200){
						this.cartLists = res.body.result;
					}
				})
			},
	      	productSelect(item){
	      		console.log(item);
	      		if(typeof item.checked == "undefined"){
	      			this.$set(item,'checked',true);
	      		}else{
	      			item.checked = !item.checked;
	      		}
	      		if(item.checked == false){
	      			this.isCheckAll = false;
	      		}
	      		this.clacTotalMoney();
	      	},
	      	selectAll(flag){
	      		this.isCheckAll = flag;
	      		this.cartLists.forEach((item,index)=>{
	      			if(typeof item.checked == "undefined"){
	      				this.$set(item,'checked',this.isCheckAll);
	      			}else{
	      				item.checked = this.isCheckAll;
	      			}
	      		});
	      		this.clacTotalMoney();
	      	},
	      	clacTotalMoney(){
	      		this.totalPrice = 0;
	      		this.cartLists.forEach((item,index)=>{
	      			if(item.checked){
	      				this.totalPrice+=item.prices*item.productQuentity;
	      			}
	      		})
	      	},
	      	deleteProductModal(index){
	      		this.cartLists.splice(index,1);
	      		this.clacTotalMoney();
	      	},
  			add(product){
  				
				if(product.productQuentity<999){
					product.productQuentity++;
				}else{
					product.productQuentity = 999;
				}
				this.clacTotalMoney();
			},
			increase(product){
				
				if(product.productQuentity>1){
					product.productQuentity--;
				}else{
					product.productQuentity = 1;
				}
				this.clacTotalMoney();
			}
		},
		components:{
			sidebar,
			hotList,
			navHeader
		}
	}
</script>