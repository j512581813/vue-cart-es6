<template>
	<div>
		<nav-header></nav-header>
		<div class="black">{{message}}</div>
	</div>
</template>
<script>
	import NavHeader from "./header"
	export default{
		data(){
			return{
				message:"界面还在开发中"
			}
		},
		components: {
			NavHeader
        }
	}
</script>