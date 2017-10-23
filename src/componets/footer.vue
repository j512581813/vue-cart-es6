<template>
	<div>
		<footer class="clear-fix">
			<div class="link">
				<ul>
					<li class="link_txt" v-for="(item,index) in footerLink"><a v-text=item.name></a></li>
					
				</ul>
			</div>
		</footer>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				footerLink:""
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.footerLinks();
			})
		},
		methods:{
			footerLinks(){
				this.$http.get("data/footerLink.json").then(res=>{
					if(res.body.code == 200){
						this.footerLink = res.body.result;
					}
				})
			}
		}
	}
</script>