import Vue from 'vue'
import Vuerouter from 'vueRouter'
import Vuex from 'vuex'

//组件
import netEasyNav from '../js/components/netEasyNav.vue'
import animatePratice from "../js/components/animatePratice.vue";
import articleFilter from "../js/components/articleFilter.vue";
import netEasyFindMusicPush from '../js/components/netEasyFindMusicPush.vue';

import '../css/netEasyIndex.css'

Vue.use(Vuerouter);
Vue.use(Vuex);

//数据块
const navStore = new Vuex.Store({
    state:{
        navList:[
            {navName:'发现音乐',path:'/netEasyNav'},
            {navName:'我的音乐',path:'/articleFilter'},
            {navName:'朋友',path:'/animatePratice'},
            {navName:'商城',path:'/animatePratice'},
            {navName:'音乐人',path:'/animatePratice'},
            {navName:'下载客户端',path:'/animatePratice'},
        ],
        findMusic:[
            {navName:'推荐',path:'/netEasyNav/netEasyFindMusicPush'},
            {navName:'排行榜',path:''},
            {navName:'歌单',path:''},
            {navName:'主播电台',path:''},
            {navName:'歌手',path:''},
            {navName:'新碟上架',path:''},
        ]
    },
    mutations:{

    }
})

//路由
const vuerouter = [
    {
        path:'/animatePratice',
        component:animatePratice,
    },
    {
        path:'/netEasyNav',
        component:netEasyNav,
        children:[
            {path:'netEasyFindMusicPush',component:netEasyFindMusicPush,}
        ]
    },
    {path:'/articleFilter',component:articleFilter},
];
const router = new Vuerouter({
    routes:vuerouter
});


const navContainer = new Vue({
    el:'#navContainer',
    store:navStore,
    router:router,
    components:{netEasyNav}
})

router.push('/netEasyNav/netEasyFindMusicPush');



