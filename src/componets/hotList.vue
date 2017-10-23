<template>
	<aside class="content J_products  clear-fix">
		<div class="J_product_list">
			<div class="product_title"><h3>推荐产品</h3><span class="more fr">more>></span></div>
			<div class="product_list"> 
				<ul>
					<li v-for="(item,index) in products" @click="productList($event,index)">
						<div  class="li_img"><img :src=item.url :data-id=index :title=item.title></div>
						<div class="li_intro">
							<P class="li_item_name" >{{item.title}}</P>
							<p class="price"><em>{{item.price|money}}</em><i >{{item.oldPrice|money}}</i></p>
						</div>
					</li>
				</ul>
				<div class="clear-fix"></div>
				<div class="J_product_controls" :class="{unshow:arrowFlag}">
					<a class="arrow prev" @click = "prevClick()">></a>
					<a class="arrow next" @click = "nextClick()">></a>
				</div>
			</div>
		</div>
	</aside>
</template>
<script>
	import money from "../filter.js"
	export default{
		data(){
			return{
				products:[],
				navIndex:-1,
				isActive:false,
				unActive:true,
				currentIndexs:0,
				arrowFlag:true
			}
		},
		mounted:function(){
			this.$nextTick(()=>{
				this.getProducts();
			});
		},
		methods:{
			showArrow(param){
				if(param ==1){
					this.arrowFlag = false;
				}else{
					this.arrowFlag = true;
				}
			},
			getProducts(){
				this.$http.get('data/products.json').then(res=>{
					this.products = res.body.result;
				})
			},
			productList(event,index){
				let href  = window.location.href;
				let url = href.split("#")[0];
				window.location.href = url + "#/detail";
			},

		}
	}
</script>