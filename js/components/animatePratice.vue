<template>
    <div class="con">
        <input class="search" v-bind:class="{'searchScroll':search.searchScroll}"
               @blur="search.searchScroll = false"
               @focus="search.searchScroll = true"
               @keyup="find()"
               v-model="search.value" placeholder="FIND">

        <article v-for="article in article" class="article" v-bind:class="{'ani':article.scroll}"
                 @click="click(article)" v-if="article.match">
            <transition name="op">
                <div class="tru" v-if="article.scroll" key="hello">
                    <header class="atHeader">{{ article.articleHeader }}</header>
                    <div class="atContent">{{ article.articleContent }}</div>
                </div>
                <div class="fal" v-else key="bye">{{ article.articleHeader }}</div>
            </transition>
        </article>
    </div>
</template>

<script>
    export default {
        name: "animatePratice",
        data(){
            return {
                search:{
                    searchScroll:false,
                    value:'',
                },
                article:[
                    {
                        articleHeader:'header',
                        articleContent:'content',
                        scroll:false,
                        match:true,
                    },
                    {
                        articleHeader:'雷神短歌',
                        articleContent:'鸣神（なるかみ）の　少（すこ）しとよみて　さし昙（くも）り　雨（あめ）も降（ふ）らんか　君（きみ）を留（とど）めん 鸣神（なるかみ）の　少（すこ）しとよみて　降（ふ）らずとも　我（わ）は止（とど）まらん　妹（いも）し留（とど）めば\n',
                        scroll:false,
                        match:true,
                    },
                    {
                        articleHeader:'山海经',
                        articleContent:'南山经之首曰鹊山。其首曰招摇之山，临于西海之上。多桂多金玉。有草焉，其状如韭而青华，其名曰祝馀，食之不饥。有木焉，其状如榖而黑理，其华四照。其名曰迷榖，佩之不迷。有兽焉，其状如禺而白耳，伏行人走，其名曰狌狌，食之善走。丽麂之水出焉，而西流注于海，其中多育沛，佩之无瘕疾。',
                        scroll:false,
                        match:true,
                    },
                    {
                        articleHeader:'align-items',
                        articleContent:'Changing align-items alters the geometry of the element. That means that it may affect the position or size of other elements on the page, both of which require the browser to perform layout operations.',
                        scroll:false,
                        match:true,
                    }
                ]
            }
        },
        methods:{
            click(it){
                let base = it.scroll;
                this.article.forEach(a=>{
                    a.scroll = false;
                });
                if(!base){
                    it.scroll = !it.scroll;
                }
            },
            find(){
                this.article.forEach(a=>{
                    for (let i = 0;i < a.articleHeader.length;i++){
                        console.log(this.search.value);
                        let tof = a.articleHeader.indexOf(this.search.value);
                        if(tof >= 0){
                            a.match = true
                        }else{
                            a.match = false
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    input::placeholder{
        color:lightgray;
    }
    .search{
        display: block;
        width: 3%;
        height: 40px;
        margin: 10px auto;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 0 0 2px #333333;
        border-radius: 10%;
        border: 0 solid #ffffff;
        text-align: center;
        background-color: #607d8b;
        transition: 0.5s;
        outline: none;
        color: #ffffff;
    }
    .searchScroll{
        width: 40%;
        border-radius: 0;
    }
    .con{
        width: 100%;
    }
    .article{
        width: 40%;
        height: 40px;
        margin: -1px auto;
        box-shadow: 0 0 2px #333333;
        background: #ffffff;
        transition: 0.3s;
        transform: scale(1.0);
    }
    .ani{
        height: 200px;
        margin: 20px auto;
        transform: scale(1.1);
    }
    .tru{
        width: 100%;
        position: absolute;
    }
    .fal{
        width: 100%;
        padding: 5px;
        position: absolute;
    }
    .atHeader{
        width: 100%;
        height: 80px;
        padding: 40px 0 10px 10px;
        background-color: #455A64;
        font-size: 1.5em;
        font-weight: bolder;
        color:#ffffff;
        box-sizing: border-box;
    }
    .atContent{
        width: 100%;
        height: 120px;
        padding: 10px 0 40px 10px;
        font-size: 12px;
        color: #606060;
        box-sizing: border-box;
    }

    .op-enter-active{
        animation: op-in 0.2s;
    }
    .op-leave-active{
        animation: op-in 0.2s reverse;
    }
    @keyframes op-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>