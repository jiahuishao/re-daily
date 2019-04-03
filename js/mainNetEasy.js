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
            {navName:'发现音乐',path:'/netEasyNav',active:true},
            {navName:'我的音乐',path:'/articleFilter',active:false},
            {navName:'朋友',path:'/animatePratice',active:false},
            {navName:'商城',path:'/animatePratice',active:false},
            {navName:'音乐人',path:'/animatePratice',active:false},
            {navName:'下载客户端',path:'/animatePratice',active:false},
        ],
        findMusic:[
            {navName:'推荐',path:'/netEasyNav/netEasyFindMusicPush',active:true},
            {navName:'排行榜',path:'',active:false},
            {navName:'歌单',path:'',active:false},
            {navName:'主播电台',path:'',active:false},
            {navName:'歌手',path:'',active:false},
            {navName:'新碟上架',path:'',active:false},
        ],
        ablum:[
            {ablumName:'2019已经过去¼ 你的目标完成的怎么样了？',imgSrc:require('../image/109951163935921247.jpeg'),listenTimes:2040000},
            {ablumName:'2019已经过去¼ 你的目标完成的怎么样了？',imgSrc:require('../image/109951163935921247.jpeg'),listenTimes:2040000},
            {ablumName:'2019已经过去¼ 你的目标完成的怎么样了？',imgSrc:require('../image/109951163935921247.jpeg'),listenTimes:2040000},
            {ablumName:'2019已经过去¼ 你的目标完成的怎么样了？',imgSrc:require('../image/109951163935921247.jpeg'),listenTimes:2040000},
            {ablumName:'Rapper情话|品尝一杯水果味甜蜜气泡',imgSrc:require('../image/109951163968036196.jpeg'),listenTimes:930000},
            {ablumName:'Rapper情话|品尝一杯水果味甜蜜气泡',imgSrc:require('../image/109951163968036196.jpeg'),listenTimes:930000},
            {ablumName:'Rapper情话|品尝一杯水果味甜蜜气泡',imgSrc:require('../image/109951163968036196.jpeg'),listenTimes:930000},
            {ablumName:'Rapper情话|品尝一杯水果味甜蜜气泡',imgSrc:require('../image/109951163968036196.jpeg'),listenTimes:930000},
        ],
        ablumCover:require('../image/coverall.png'),
        indexPng:require('../image/index.png'),
    },
    mutations:{
        Faclick(state,a){
            this.state.navList.forEach(a=>{
                a.active = false
            })
            a.active = true
        },
        Sonclick(state,a){
            this.state.findMusic.forEach(a=>{
                a.active = false
            })
            a.active = true
        }
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
    components:{netEasyNav},
    methods:{
        click(a) {
            this.$store.commit("Faclick",a)
        }
    }
})

router.push('/netEasyNav/netEasyFindMusicPush');



