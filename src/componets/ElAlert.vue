<template>
	<transition name="el-alert-fade"> 
		<div class="el-alert" :class="[ typeClass ]" v-show="visiable">
			<i class="el-alert-icon" :class="[ isBigIcon , iconClass]" v-if="showIcon"></i>
			<div class="el-alert-content">
				<div class="el-alert-title" v-if="title" :class="[isBigTitle]" v-text="title"></div>
				<slot>
					<p class="el-alert-description" v-if="discription" v-text="discription"></p>
				</slot>
				<i class="el-alert-closebtn" v-if="closable" @click="close()" :class="{'is-customed': closeText !== '', 'el-icon-close': closeText === ''}" v-text="closeText"></i>
			</div>
		</div>
	</transition>
</template>
<style type="text/css">
	.el-alert-fade-enter,
	.el-alert-fade-leave-active {
	    opacity: 0;
	}
</style>
<script type="text/babel">
	const TYPE_CLASSES_MAP = {
	    'success': 'el-icon-circle-check',
	    'warning': 'el-icon-warning',
	    'error': 'el-icon-circle-cross'
  	};
	export default{
		name:"ALERT",
		props:{
			showIcon: {
				type: Boolean,
				default:true,
			},
			title: {
				type :String,
				default : "",
				required :true
			},
			discription: {
				type : String,
				default : "哈哈哈哈哈",
				required :true
			},
			type: {
		        type: String,
		        default: 'info'
	      	},
	      	closable: {
	      		type: Boolean,
	      		default:true
	      	},
	      	closeText: {
	      		type: String,
	      		default: ''
	      	}
		},
		data(){
			return{
				visiable:true
			}
		},
		computed:{
			typeClass(){
				return `el-alert-${ this.type }`;
			},
			isBigIcon(){
				return this.discription ? 'is-big':'';
			},
			isBigTitle(){
				return this.discription ? 'is-bold':'';
			},
			iconClass(){
				return TYPE_CLASSES_MAP['this.type']||'el-icon-information';
			}
		},
		methods:{
			close(){
				this.visiable = false;
			 	this.$emit('close');
			}
		}	
	}
</script>