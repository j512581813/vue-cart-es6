<template>
	<div class="nav">
		<ul>
			<li v-for="(menu,index) in menus"  :class="{on:index==currentIndex}"><a :href=menu.url>{{menu.name}}</a></li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				menus:[],
				currentIndex:0
			}
		},
		mounted:function(){
			this.setNavLineHeight();
			this.$nextTick(()=>{
				this.getMenuLists();
			});
		},
		methods:{
			getMenuLists(){
				this.$http.get("data/menu.json").then(res=>{
					this.menus = res.body.menu;
				});
			},
			setNavLineHeight(){
				const url = window.location.href;
				const types = url.substring(url.lastIndexOf('/')+1,url.length);
				if(types =="index"){
					this.currentIndex= 0;
				}else if(types == "list"||types == "detail"||types == "shoppingCart"){
					this.currentIndex= 2;
				}else if(types == "about"){
					this.currentIndex= 3;
				}else if(types == "new"){
					this.currentIndex= 1;
				}else if(types == "contact"){
					this.currentIndex= 4;
				}

			}
		}
	}
</script>


