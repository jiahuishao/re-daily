<template>
    <div>
        <div class="labelBlock" v-for="label in label" v-on:click="choose(label)" v-bind:class="{'active':label.choose}">
        {{ label.labelName }}
        </div>
        <div id="articlePart">
            <div class="article" v-for="article in article" v-if="article.show">
                {{ article.articleName }}
                <div v-if="article.scroll">{{ article.articleContent }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    function filter(a,b) {
        var exist = false;
        for(let i = 0;i < a.length;i++){
            let index = b.indexOf(a[i]);
            if(index >= 0){
                exist = true;
            }
        }
        return exist;
    }


    export default {
        name: "app",
        data(){
            return {
                article:[
                    {
                        articleName:'文章一',
                        articleContent:'文章一内容',
                        articleLabel:[1],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'文章二',
                        articleContent:'文章二内容',
                        articleLabel:[2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'文章三',
                        articleContent:'文章三内容',
                        articleLabel:[1,2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                ],
                label:[
                    {
                        labelName:'标签一',
                        labelId:1,
                        choose:false,
                    },{
                        labelName:'标签二',
                        labelId:2,
                        choose:false
                    }
                ]
            }
        },
        methods:{
            choose:function (label) {
                const chooseLabel = [];

                label.choose = !label.choose;
                for (var i = 0;i < this.label.length;i++){
                    if(this.label[i].choose) {
                        chooseLabel.push(this.label[i].labelId);
                    }
                }
                for(var k = 0;k < this.article.length;k++){
                    var ifExist = filter(this.article[k].articleLabel,chooseLabel);
                    console.log(ifExist);
                    if(ifExist){
                        this.article[k].show = true;
                    }else{
                        this.article[k].show = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .active{
        color: red;
    }
</style>