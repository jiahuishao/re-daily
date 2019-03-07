<template>
    <div>
        <div class="questionGroup" v-for="(question,index) in questionAndAnswer">
            <div class="question">{{ index+1 }}.{{ question.question }}
                <template>
                    <span class="qlabel" v-if="question.questionType == 'single'">[单选]</span>
                    <span class="qlabel" v-else-if="question.questionType == 'mul'">[多选]</span>
                </template>
            </div>
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
        <button class="submit" v-on:click="check()">交卷</button>
    </div>
</template>

<script>
    import '../../css/globel.css'
    import '../../css/selectAnswer.css'
    import {questionAndAnswer as qAa} from '../dataSave/dataSave.js'

    export default {
        name: "selectAnswer",
        data(){
            return {
                questionAndAnswer:qAa,
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