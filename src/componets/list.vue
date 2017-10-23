<template>
	<div>
		<nav-header></nav-header>
		<article class="content J_products clear-fix" id="J_products" @click="changePos()">
			<waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="productLists" ref="waterfall" @reflowed="reflowed">
	        <waterfall-slot move-class="item-move"  v-for="(item, index) in productLists" :width="item.width" :height="item.height" :order="index" :key="item.index">
	          <div class="item" :style="item.style" ><img :src=item.url>
	          <div class="item-name" v-text=item.title></div>
	          </div>
	        </waterfall-slot>
	      </waterfall>

		</article>
	</div>
</template>
<script>
	import NavHeader from "./header"
	import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
	import Waterfall from 'vue-waterfall/lib/waterfall'
	export default{
		data(){
			return{
				align:"left",
				productLists:[{width:190,height:282,url:'static/images/p_000.jpg',title:"title1"},{width:190,height:288,url:'static/images/p_001.jpg',title:"title1"},{width:190,height:286,url:'static/images/p_003.jpg',title:"title1"},{width:190,height:749,url:'static/images/p_004.jpg',title:"title1"},{width:190,height:329,url:'static/images/p_006.jpg'},{width:190,height:288,url:'static/images/p_007.jpg',title:"title1"},{width:190,height:277,url:'static/images/p_008.jpg',title:"title1"},{width:190,height:277,url:'static/images/p_009.jpg',title:"title1"},{width:190,height:128,url:'static/images/p_011.jpg',title:"title1"},{width:190,height:288,url:'static/images/p_012.jpg',title:"title1"},{width:190,height:288,url:'static/images/p_014.jpg',title:"title1"},{width:190,height:277,url:'static/images/p_015.jpg',title:"title1"}],
				temp:""
			}
		},
		mounted(){
			this.scrollGetdata();
			this.$nextTick(()=>{
				
			})
		},
		methods:{
			getProductList(){
				this.$http.get("data/productList.json").then(res=>{
					if(res.body.code == "200"){
						this.temp = [{width:190,height:282,url:'static/images/p_000.jpg',title:"title1"},{width:190,height:288,url:'static/images/p_001.jpg',title:"title1"},{width:190,height:286,url:'static/images/p_003.jpg',title:"title1"},{width:190,height:749,url:'static/images/p_004.jpg',title:"title1"},{width:190,height:329,url:'static/images/p_006.jpg',title:"title1"},{width:190,height:288,url:'static/images/p_007.jpg',title:"title1"},{width:190,height:277,url:'static/images/p_008.jpg',title:"title1"},{width:190,height:277,url:'static/images/p_009.jpg',title:"title1"},{width:190,height:128,url:'static/images/p_011.jpg',title:"title1"},{width:190,height:288,url:'static/images/p_012.jpg',title:"title1"},{width:190,height:288,url:'static/images/p_014.jpg',title:"title1"},{width:190,height:277,url:'static/images/p_015.jpg'}];
					}
				})	
				return this.temp
			},
	      	scrollGetdata:function(){
	      		const _this = this;
				const url = window.location.href;
				const types = url.substring(url.lastIndexOf('/')+1,url.length);
				if(types == "list"){
		  		  	window.addEventListener('scroll', function () {
						var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				    	if (scrollTop + window.innerHeight >= document.body.clientHeight) {
							var data =_this.getProductList();
							if(_this.productLists.length<100){
								_this.getData(data);
							}else{
								console.log("数据加载完成");
							}
							
				        }
				  	})
				}
	      	},
	  	  	getData:function (data){
	  			var i,_this = this,len= data.length;
		  		for(i=0;i<len;i++){
		  			_this.productLists.push(data[i]);
		  		}
	  		},
	      	shuffle: function () {
	            this.productLists.sort(function () {
	              	return Math.random() - 0.5
	            })
      		},
	      	reflowed: function () {
	            this.isBusy = false
	      	},
	      	changePos:function(){
	      		this.shuffle()
	      	}
		},
		components: {
			NavHeader,
			Waterfall,
			WaterfallSlot
		},
	}
</script>