import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    //domain:'127.0.0.1', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: { //保存用户信息
      username: "",
      password: ""
    }
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    },
    INCREMENT(state) {
      state.count++
    },
    DECREMENT(state) {
      state.count--
    }
  },
  actions:{
    increment(context) {
        context.commit("INCREMENT");
    },
    decrement(context) {
        context.commit("DECREMENT");
    }
  }
})

Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if(arr = document.cookie.match(reg))
    return(arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie = (name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if(cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

export default store;