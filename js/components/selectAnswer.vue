<template>
    <div>
        <div  v-for="(question,index) in questionAndAnswer">
            <div class="question">{{ index+1 }}.{{ question.question }}</div>
            <ul class="answer" v-if="question.questionType == 'single'">
                <li v-for="(answer,index) in question.answer"
                    v-bind:class="{'select':question.userChoose == index}"
                    v-on:click="choose(question,index)">{{ answer }}
                </li>
            </ul>
            <ul class="answer" v-if="question.questionType == 'mul'">
                <li v-for="(answer,index) in question.answer"
                    v-bind:class="{'select':question.userChoose.indexOf(index)>=0}"
                    v-on:click="choose(question,index)">{{ answer }}
                </li>
            </ul>
        </div>
        <button v-on:click="check()">交卷</button>
    </div>
</template>

<script>
    import '../../css/selectAnswer.css'

    export default {
        name: "selectAnswer",
        data(){
            return {
                questionAndAnswer:[
                    {
                        knowledge:['javaScript'],
                        questionId:1,
                        questionType:'single',
                        question:'关于javascript的原始类型（primitive type），错误的是',
                        answer:[
                            '有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String',
                            'var sTemp = "test string";alert (typeof sTemp);结果为string',
                            'var oTemp;alert(oTemp == undefined)为true',
                            'alert(null == undefined);结果为false',
                        ],
                        right:[3],
                        userChoose:[4]
                    },
                    {
                        knowledge:['javaScript'],
                        questionId:1,
                        questionType:'mul',
                        question:'关于javascript的原始类型（primitive type），错误的是',
                        answer:[
                            '有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String',
                            'var sTemp = "test string";alert (typeof sTemp);结果为string',
                            'var oTemp;alert(oTemp == undefined)为true',
                            'alert(null == undefined);结果为false',
                        ],
                        right:[1,2,3],
                        userChoose:[1,2,3]
                    },
                ],
                sum:0,
            }
        },
        methods:{
            check(){
                this.sum = 0;
                this.questionAndAnswer.forEach(q=>{
                    if (q.right.toString() == q.userChoose.toString())
                        this.sum += 10;
                    else
                        this.sum += 0;
                })
                alert(this.sum);
            },
            choose(qt,index){
                if(qt.questionType == 'single'){
                    qt.userChoose.shift(0)
                    qt.userChoose.push(index)
                }
                else if(qt.questionType == 'mul'){
                    var ind = qt.userChoose.indexOf(index);
                    if(ind >= 0){
                        qt.userChoose.splice(ind,1);
                        qt.userChoose.sort();
                    }else{
                        qt.userChoose.push(index);
                        qt.userChoose.sort();
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>