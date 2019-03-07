<template>
    <div class="articleFilter">
        <div class="labelContainer">
            <div class="labelBlock" v-for="label in label" v-on:click="choose(label)" v-bind:class="{'active':label.choose}">
                {{ label.labelName }}
            </div>
        </div>
        <div class="articlePart">
            <div class="article" v-for="article in article" v-if="article.show">
                {{ article.articleName }} <span class="articleLabel">{{ getLabelName(article.articleLabel) }}</span>
                <div class="articleContent" v-if="article.scroll">{{ article.articleContent }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../css/articleFilter.css'
    import {articleFilter as af} from '../dataSave/dataSave.js'

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
                article:af,
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
                    if(ifExist){
                        this.article[k].show = true;
                    }else{
                        this.article[k].show = false;
                    }
                }
            },
            getLabelName(labelId){
                const labelName = [];
                labelId.forEach(label=>{
                    this.label.forEach(labelCName=>{
                        if(label==labelCName.labelId){
                            labelName.push(labelCName.labelName);
                        }
                    })
                })
                var labelNameList = '';
                labelName.forEach(ar=>{
                    labelNameList = labelNameList + " " + ar;
                })
                return labelNameList;
            }
        }
    }
</script>

<style scoped>

</style>