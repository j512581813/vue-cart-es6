import Vue from "vue"
import VueRouter from 'vue-router'
import vueResource from "vue-resource";
import babelpolyfill from 'babel-polyfill'
import routes from './routes'
import Vuex from "vuex"
import store from "./store"

Vue.use(Vuex);
Vue.use(VueRouter)
Vue.use(vueResource)
   
const router = new VueRouter({
      routes,
      scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
});

new Vue({
  router,
  store,
  wacth:{
  	"$route" : 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods:{
  		checkLogin(){
			// if(!this.getCookie('session')){
	  //       	this.$router.push('/login');
	  //     	}else{
	      		
	  //     	}
	  this.$router.push('/index');
  		}
  	},
  	data(){
	  	return{
	  		message:"SUCCESS"
	  	}
  	}
}).$mount('#app')

// 注册子组件
// 将当前消息派发出去
Vue.component('child', {
  template: '#child-template',
  data: function () {
    return { msg: 'hello' }
  },
  methods: {
    notify: function () {
      if (this.msg.trim()) {
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
})

// 初始化父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
  el: '#events-example',
  data: {
    messages: []
  },
  // 在创建实例时 `events` 选项简单地调用 `$on`
  events: {
    'child-msg': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      this.messages.push(msg)
    }
  }
})
