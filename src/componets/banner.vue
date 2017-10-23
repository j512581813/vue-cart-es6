<template>
	<div class="banner my-swipe fl">
		<ul v-on:mouseover="stopSlider($event)" v-on:mouseout="beginSlider($event)" :style="[sliderActive,{'width':images.length*700+'px'}]">
			<li v-for="(item,index) in images"><img :src=item.bannerUrl></li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				images:[],
				nowSlider : 0,
			 	sliderActive : {
		            transform: 'translate3d(0px,0,0)',
		            transition:'transform 2s'
         		},
				interTimer:''
			}
		},
		mounted:function(){
			this.$nextTick(()=>{
				this.getBanners();
				this.interTimer = setInterval(()=>{
					this.getStartSlider();
				},3000)
			});
		},
		methods:{
			getBanners:function(){
				this.$http.get('data/banner.json').then(res=>{
					this.images = res.body.bannerImages;
				})
			},
			getStartSlider:function(){
				this.nowSlider ++;
				if(this.nowSlider === this.images.length){
	                this.sliderActive = {
	                    transform: 'translate3d(0,0,0)'
	                }
					this.nowSlider = 0;
				}
				this.sliderActive = Object.assign({},{
	                transition:'transform 1s',
	                transform: `translate3d(${-700*(this.nowSlider)}px,0,0)`
	            }) 
			},
			stopSlider:function(e){
	            clearInterval(this.interTimer)
	            delete this.sliderActive['transition'] //关闭css3过渡效果

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
			},
			beginSlider:function(e){
				this.interTimer = setInterval(()=>{
						this.getStartSlider();
				},3000)
			}
		}
	}
</script>