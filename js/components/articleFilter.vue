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
                        articleName:'建御雷神',
                        articleContent:'建御雷神（タケミカヅチ）是日本神话中的一位神祇，被奉为雷神、刀剑之神、弓术之神、武神和军神。在《古事记》里写作建御雷之男神、建御雷神，在《日本书纪》里写作武瓮槌、武瓮雷男神。别名建布都神、丰布都神，在鹿岛神宫的祭祀中则以鹿岛神的名字出现。',
                        articleLabel:[1],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'建御雷神',
                        articleContent:'建御雷神（《日本书纪》）或称天照大御神（《古事记》）、天照皇大神、皇大御神、天照坐皇大御神、大日孁贵、大日女尊、大日灵，天照是日本神话里三贵子之一、高天原的统治者与太阳的神格化。她被奉为日本天皇的始祖（皇祖神），也是神道教最高神。 [1] ',
                        articleLabel:[2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'月读',
                        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
                        articleLabel:[1,2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'建御雷神',
                        articleContent:'建御雷神（タケミカヅチ）是日本神话中的一位神祇，被奉为雷神、刀剑之神、弓术之神、武神和军神。在《古事记》里写作建御雷之男神、建御雷神，在《日本书纪》里写作武瓮槌、武瓮雷男神。别名建布都神、丰布都神，在鹿岛神宫的祭祀中则以鹿岛神的名字出现。',
                        articleLabel:[1],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'建御雷神',
                        articleContent:'建御雷神（《日本书纪》）或称天照大御神（《古事记》）、天照皇大神、皇大御神、天照坐皇大御神、大日孁贵、大日女尊、大日灵，天照是日本神话里三贵子之一、高天原的统治者与太阳的神格化。她被奉为日本天皇的始祖（皇祖神），也是神道教最高神。 [1] ',
                        articleLabel:[2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'月读',
                        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
                        articleLabel:[1,2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'月读',
                        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
                        articleLabel:[1,2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'建御雷神',
                        articleContent:'建御雷神（《日本书纪》）或称天照大御神（《古事记》）、天照皇大神、皇大御神、天照坐皇大御神、大日孁贵、大日女尊、大日灵，天照是日本神话里三贵子之一、高天原的统治者与太阳的神格化。她被奉为日本天皇的始祖（皇祖神），也是神道教最高神。 [1] ',
                        articleLabel:[2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'月读',
                        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
                        articleLabel:[1,2],
                        show:true, //是否显示
                        scroll:true, //是否展开
                    },
                    {
                        articleName:'月读',
                        articleContent:'月读（ツクヨミ、ツキヨミ），别称月夜见（ツクヨミノミコト）、月余美、月弓尊（ツクユミノミコト）、月读壮士（ツキヨミオトコ）、月神以及月人。他是日本神话和神道的一位神祇，是月的神格化，“三贵子（月读、天照大神、素戋呜尊）”之一，伊邪那岐之子，掌管黑夜的神明。 [1-3] ',
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