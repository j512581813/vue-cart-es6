<template>
	<div class="J_product_fl fl">
		<div class="list_name">
			<h3>推荐产品</h3>
		</div>
		<div class="list_item">
			<ul>
				<li v-for="(item,index) in detailData">
					<div class="num fl" v-text=(index+1)></div>
					<div class="li_img fl"><img :src=item.url></div>
					<div class="li_intro fl">
						<p class="item_name" v-text=item.title></p>
					</div>
					<div class="clear-fix"></div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				detailData:""
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
						this.detailData = res.body.result;
					}
				})
			}
		}
	}
</script>