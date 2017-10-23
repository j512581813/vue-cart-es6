import Vue from "vue";

Vue.filter("money",(val)=>{
	return "￥"+val.toFixed(2)
})

Vue.filter("moneyDetail",(val)=>{
	return "￥"+val
});

Vue.filter("formatHeavy",val=>{
	return val+"kg";
})

Vue.filter("chooseRMB",(val,type)=>{
	return val.toFixed(2)+type
})
