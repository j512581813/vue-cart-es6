<template>
	<div>
		<nav-header></nav-header>
		<article class="content clear-fix">
			<side-nav></side-nav>
			<div class="J_newsDetail fl">
				<div class="news_title"><h3>{{detailInfo.title}}</h3></div>
				<div class="new"><span class="news_author">作者：{{detailInfo.author}}</span><span class="news_time">时间：{{detailInfo.time}}</span></div>
				<div class="new_cont"><p>{{detailInfo.content}}</p></div>
			</div>
		</article>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	import NavHeader from "./header"
	import sideNav from "./side"
	import footerBar from "./footer"
	export default{
		data(){
			return{
				detailInfo:{
					title:"",
					time:"",
					author:"",
					content:""
				}

			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.getNewsDetail();
			})
		},
		methods:{
			getNewsDetail(){
				this.$http.get("data/newsdetail.json").then(res=>{
					console.log(res);
					if(res.body.code === 200){
						this.detailInfo.title = res.body.result.title;
						this.detailInfo.time = res.body.result.time;
						this.detailInfo.content = res.body.result.content;
						this.detailInfo.author = res.body.result.author;
					}
				})
			}
		},
		components: {
			NavHeader,
            sideNav,
            footerBar
        }
	}
</script>