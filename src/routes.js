// import NotFound from "./componets/404.vue"
// import Banner from "./componets/banner.vue"
// import Index from "./componets/index.vue"
// import Header from "./componets/header.vue"
// import Menu from "./componets/menu.vue"
// import hotList from "./componets/hotList.vue"
// import List from "./componets/list.vue"
// import New from "./componets/new.vue"
// import About from "./componets/about.vue"
// import Contact from "./componets/contact.vue"
// import Detail from "./componets/detail.vue"
// import ShopCart from "./componets/shoppingcart.vue"
// import Login from "./componets/login.vue"
// import Register from "./componets/register.vue"
// import NewDetail from "./componets/newDetail.vue"
// import test from "./componets/test.vue"

const NotFound = r =>require.ensure([],()=>r(require('./componets/404.vue')),'NotFound')
const Banner = r =>require.ensure([],()=>r(require('./componets/banner.vue')),'Banner')
const Index = r =>require.ensure([],()=>r(require('./componets/index.vue')),'Index')
const Header = r =>require.ensure([],()=>r(require('./componets/header.vue')),'Header')
const Menu = r =>require.ensure([],()=>r(require('./componets/menu.vue')),'Menu')
const hotList = r =>require.ensure([],()=>r(require('./componets/hotList.vue')),'hotList')
const List = r =>require.ensure([],()=>r(require('./componets/List.vue')),'List')
const New = r =>require.ensure([],()=>r(require('./componets/new.vue')),'New')
const About = r =>require.ensure([],()=>r(require('./componets/about.vue')),'About')
const Contact = r =>require.ensure([],()=>r(require('./componets/contact.vue')),'Contact')
const Detail = r => require.ensure([],()=>r(require('./componets/detail.vue')),'Detail')
const ShopCart = r=>require.ensure([],()=>r(require('./componets/shoppingcart.vue')),'ShopCart')
const Login = r =>require.ensure([],()=>r(require('./componets/login.vue')),'Login')
const Register = r =>require.ensure([],()=>r(require('./componets/register.vue')),'Register')
const NewDetail = r =>require.ensure([],()=>r(require('./componets/newDetail.vue')),'NewDetail')
const test = r => require.ensure([],()=>r(require('./componets/test.vue')),'test');

let routes = [
    {
        path: '/',
        component: Index,
        name: '首页',
        hidden: true
    },
    {
        path: '/index',
        component: Index,
        name: '首页',
        hidden: true
    },
    {
    	path: '/404',
    	component: NotFound,
        name: '',
        hidden: true
    },
    {
        path:"/list",
        component:List,
        name:'产品列表',
        hidden:true
    },
    {
        path:"/new",
        component:New,
        name:"新闻列表",
        hidden:true
    },
    {
        path:"/about",
        component:About,
        name:"关于我们",
        hidden:true
    },
    {
        path:"/contact",
        component:Contact,
        name:"联系我们",
        hidden:true
    },
    {
        path:"/detail",
        component:Detail,
        name:"",
        hidden:true
    },
    {
        path:"/shopcart",
        component:ShopCart,
        name:"",
        hidden:true
    },
    {
        path:"/login",
        component:Login,
        name:"",
        hidden:true
    },
    {
        path:"/register",
        component:Register,
        name:"",
        hidden:true
    },
    {
        path:"/newDetail/:id",
        component:NewDetail,
        name:"",
        hidden:true
    },
    {
        path:'/test',
        component:test,
        name: '',
        hidden:true
    }
];

export default routes;