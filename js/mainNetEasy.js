import Vue from 'vue'
import Vuerouter from 'vueRouter'
import Vuex from 'vuex'

//组件
import netEasyNav from '../js/components/netEasyNav.vue'
import animatePratice from "../js/components/animatePratice.vue";
import articleFilter from "../js/components/articleFilter.vue";
import netEasyFindMusicPush from '../js/components/netEasyFindMusicPush.vue';
import netEasyFindMusicList from '../js/components/netEasyFindMusicList.vue';

import '../css/netEasyIndex.css'

Vue.use(Vuerouter);
Vue.use(Vuex);

//数据块
const navStore = new Vuex.Store({
    state:{
        navList:[
            {navName:'发现音乐',path:'/netEasyNav/netEasyFindMusicPush',active:true},
            {navName:'我的音乐',path:'/articleFilter',active:false},
            {navName:'朋友',path:'/animatePratice',active:false},
            {navName:'商城',path:'/animatePratice',active:false},
            {navName:'音乐人',path:'/animatePratice',active:false},
            {navName:'下载客户端',path:'/animatePratice',active:false},
        ],
        findMusic:[
            {navName:'推荐',path:'/netEasyNav/netEasyFindMusicPush',active:true},
            {navName:'排行榜',path:'',active:false},
            {navName:'歌单',path:'/netEasyNav/netEasyFindMusicList',active:false},
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
        MusicAblum:[
            {MusicAblumName:'Kills You Slowly',Singer:'The Chainsmokers',MusicAblumCoverImgSrc:require('../image/109951163955005483.jpeg')},
            {MusicAblumName:'Kills You Slowly',Singer:'The Chainsmokers',MusicAblumCoverImgSrc:require('../image/109951163955005483.jpeg')},
            {MusicAblumName:'Kills You Slowly',Singer:'The Chainsmokers',MusicAblumCoverImgSrc:require('../image/109951163955005483.jpeg')},
            {MusicAblumName:'Kills You Slowly',Singer:'The Chainsmokers',MusicAblumCoverImgSrc:require('../image/109951163955005483.jpeg')},
            {MusicAblumName:'Kills You Slowly',Singer:'The Chainsmokers',MusicAblumCoverImgSrc:require('../image/109951163955005483.jpeg')},
        ],
        Music:[
            {MusicName:'绿色',MusicHeat:1000000,MusicPushTime:'2019-01-01',originSign:true},
            {MusicName:'氧气舱',MusicHeat:900000,MusicPushTime:'2019-01-01',originSign:true},
            {MusicName:'路过人间',MusicHeat:800000,MusicPushTime:'2019-01-01',originSign:false},
            {MusicName:'亦是此间少年',MusicHeat:700000,MusicPushTime:'2019-01-01',originSign:true},
            {MusicName:'出山',MusicHeat:600000,MusicPushTime:'2019-01-21',originSign:false},
            {MusicName:'关于孤独我想说的话',MusicHeat:500000,MusicPushTime:'2019-01-11',originSign:false},
            {MusicName:'伪装',MusicHeat:400000,MusicPushTime:'2019-01-23',originSign:true},
            {MusicName:'一个人的城市',MusicHeat:300000,MusicPushTime:'2019-01-01',originSign:true},
            {MusicName:'I‘M YOURS PT.2',MusicHeat:200000,MusicPushTime:'2019-01-23',originSign:false},
            {MusicName:'你的酒馆对我打了烊',MusicHeat:100000,MusicPushTime:'2019-01-22',originSign:true},
            {MusicName:'多选在平庸的生活拥抱你',MusicHeat:100000,MusicPushTime:'2019-01-21',originSign:false},
            {MusicName:'Kills You Slowly',MusicHeat:100000,MusicPushTime:'2019-01-10',originSign:true},
            {MusicName:'形容',MusicHeat:100000,MusicPushTime:'2019-01-03',originSign:true},
            {MusicName:'我愿平凡的陪在你身边',MusicHeat:100000,MusicPushTime:'2019-01-07',originSign:false},
            {MusicName:'去见你',MusicHeat:100000,MusicPushTime:'2019-01-08',originSign:true},
            {MusicName:'桥下',MusicHeat:100000,MusicPushTime:'2019-01-06',originSign:true},
            {MusicName:'今天也想见到你',MusicHeat:100000,MusicPushTime:'2019-02-04',originSign:true},
        ],
        singerList:[
            {singerName:'张惠妹aMEI',singerSummary:'台湾歌手张惠妹台湾歌手张惠妹',singerImg:require('../image/aMEI.jpeg')},
            {singerName:'张惠妹aMEI',singerSummary:'台湾歌手张惠妹',singerImg:require('../image/aMEI.jpeg')},
            {singerName:'张惠妹aMEI',singerSummary:'台湾歌手张惠妹',singerImg:require('../image/aMEI.jpeg')},
            {singerName:'张惠妹aMEI',singerSummary:'台湾歌手张惠妹台湾歌手张惠妹',singerImg:require('../image/aMEI.jpeg')},
        ],
        anchorList:[
            {anchorName:'陈立',anchorSummary:'心理学家、美食家陈立教授',anchorImg:require('../image/1407374893913311.jpeg')},
            {anchorName:'陈立',anchorSummary:'心理学家、美食家陈立教授',anchorImg:require('../image/1407374893913311.jpeg')},
            {anchorName:'陈立',anchorSummary:'心理学家、美食家陈立教授',anchorImg:require('../image/1407374893913311.jpeg')},
            {anchorName:'陈立',anchorSummary:'心理学家、美食家陈立教授',anchorImg:require('../image/1407374893913311.jpeg')},
        ],
        songSheet:[
            {songSheetName: '50句告白密语 | 我和你是一支唱不倦的情歌',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as1x01.jpeg'),songSheetSongList:[]},
            {songSheetName: '50句告白密语 | 我和你是一支唱不倦的情歌',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as1x01.jpeg'),songSheetSongList:[]},
            {songSheetName: '欧美抒情｜因为有你，人生苦短甜长',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x02.jpeg'),songSheetSongList:[]},
            {songSheetName: '欧美抒情｜因为有你，人生苦短甜长',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x02.jpeg'),songSheetSongList:[]},
            {songSheetName: '环境音衬底°满船清梦压星河',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x03.jpeg'),songSheetSongList:[]},
            {songSheetName: '环境音衬底°满船清梦压星河',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x03.jpeg'),songSheetSongList:[]},
            {songSheetName: '况是清明好天气，不妨游衍莫忘归',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x04.jpeg'),songSheetSongList:[]},
            {songSheetName: '况是清明好天气，不妨游衍莫忘归',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x04.jpeg'),songSheetSongList:[]},
            {songSheetName: 'Future Bass丨沉醉于绝伦幻美的律动',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x05.jpeg'),songSheetSongList:[]},
            {songSheetName: 'Future Bass丨沉醉于绝伦幻美的律动',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x05.jpeg'),songSheetSongList:[]},
            {songSheetName: '50句告白密语 | 我和你是一支唱不倦的情歌',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as1x01.jpeg'),songSheetSongList:[]},
            {songSheetName: '50句告白密语 | 我和你是一支唱不倦的情歌',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as1x01.jpeg'),songSheetSongList:[]},
            {songSheetName: '欧美抒情｜因为有你，人生苦短甜长',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x02.jpeg'),songSheetSongList:[]},
            {songSheetName: '欧美抒情｜因为有你，人生苦短甜长',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x02.jpeg'),songSheetSongList:[]},
            {songSheetName: '环境音衬底°满船清梦压星河',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x03.jpeg'),songSheetSongList:[]},
            {songSheetName: '环境音衬底°满船清梦压星河',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x03.jpeg'),songSheetSongList:[]},
            {songSheetName: '况是清明好天气，不妨游衍莫忘归',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x04.jpeg'),songSheetSongList:[]},
            {songSheetName: '况是清明好天气，不妨游衍莫忘归',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x04.jpeg'),songSheetSongList:[]},
            {songSheetName: 'Future Bass丨沉醉于绝伦幻美的律动',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x05.jpeg'),songSheetSongList:[]},
            {songSheetName: 'Future Bass丨沉醉于绝伦幻美的律动',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x05.jpeg'),songSheetSongList:[]},
            {songSheetName: 'Future Bass丨沉醉于绝伦幻美的律动',songSheetAnthor:'夏实',songSheetHeat:100000,songSheetImg: require('../image/as0x05.jpeg'),songSheetSongList:[]},
        ],
        ablumCover:require('../image/coverall.png'),
        indexPng:require('../image/index.png'),
        logoPng:require('../image/topbar.png'),
        bannerPng:require('../image/banner.png'),
        indexBannerImg:[
            {imgSrc:require('../image/zhouRui.jpg'),imgSrcBackgroundColor:'#73a6da'},
            {imgSrc:require('../image/jiangHu.jpg'),imgSrcBackgroundColor:'#707070'},
            {imgSrc:require('../image/huaZhiQiXi.jpg'),imgSrcBackgroundColor:'#f0f0f2'},
        ],
        imgGroup:{
            newJpeg:require('../image/new.jpeg'),
            originJpeg:require('../image/origin.jpeg'),
            upJpeg:require('../image/up.jpeg'),
        }
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
            {path:'netEasyFindMusicPush',component:netEasyFindMusicPush,},
            {path:'netEasyFindMusicList',component:netEasyFindMusicList,}
        ]
    },
    {
        path:'/articleFilter',
        component:articleFilter
    },
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



