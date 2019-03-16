import Vue from 'vue'

//菜单
var leftNav = new Vue({
    el:'#leftNav',
    data:{
        //父菜单列表
        faNav:[
            {
                name:'建议小功能',
                faNum:1,
                display:true,
            }
        ],
        //子菜单列表
        sonNav:[
            {
                name:'简单记事本',
                sonNum:1,
                src:'notebook.html',
                click:true,
            },{
                name:'商城购物车',
                sonNum:1,
                src:'shop.html',
                click:false,
            },{
                name:'文章删选',
                sonNum:1,
                src:'test.html',
                click:false
            },{
                name:'选择答案',
                sonNum:1,
                src:'selectTrueAnswer.html',
                click:false
            },{
                name:'组件动态切换',
                sonNum:1,
                src:'singlePage.html',
                click:false
            },{
                name:'动画练手',
                sonNum:1,
                src:'animatePratice.html',
                click:false
            }
        ],
        active:1
    },
    methods:{
        onActive(ch) {
            console.log("1");
            const sonnav = this.sonNav;
            for(var i = 0;i < sonnav.length;i++){
                sonnav[i].click = false
            }
            document.getElementById('frame').src = ch.src;
            ch.click = !ch.click;
        },
    }
})