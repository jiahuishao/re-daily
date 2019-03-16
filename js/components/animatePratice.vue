<template>
    <div class="con">
        <article v-for="article in article" class="article" v-bind:class="{'ani':article.scroll}"
                 @click="click(article)">
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
                article:[
                    {
                        articleHeader:'header',
                        articleContent:'content',
                        scroll:false
                    },
                    {
                        articleHeader:'header',
                        articleContent:'content',
                        scroll:false
                    },
                    {
                        articleHeader:'header',
                        articleContent:'content',
                        scroll:false
                    },
                    {
                        articleHeader:'header',
                        articleContent:'content',
                        scroll:false
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
            }
        }
    }
</script>

<style scoped>
    .con{
        width: 100%;
    }
    .article{
        width: 60%;
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
        color:#ffffff;
    }
    .fal{
        width: 100%;
        padding: 5px;
        position: absolute;
    }
    .atHeader{
        width: 100%;
        height: 70px;
        background-color: #607d8b;
    }

    .op-enter-active{
        animation: op-in 0.3s;
    }
    .op-leave-active{
        animation: op-in 0.3s reverse;
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