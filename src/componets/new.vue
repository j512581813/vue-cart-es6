<template>
	<div>
		<nav-header></nav-header>
		<article class="content new clear-fix">
			<sidebar></sidebar>
			<div class="J_product_mid news fl">
				<div class="new_title"><h3>新闻列表</h3></div>
				<div class="new_cont">
					<ul>
						<li class="clear-fix" v-for="(item,index) in news">
							<router-link :to="'newDetail/'+index">{{item.title}}</router-link>
							<span class="time fr" v-text=item.time></span>
						</li>
					</ul>
				</div>
			</div>
		</article>
	</div>
</template>
<script>
	import navHeader from "./header"
	import sidebar from "./side"
	export default{
		data(){
			return{
				news:""
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.getNew();
			})
		},
		methods:{
			getNew(){
				this.$http.get("data/news.json").then(res=>{
					if(res.body.code == 200){
						this.news = res.body.result;
					}
				});
			}
		},
		components:{
			sidebar,
			navHeader
		}
	}
</script>