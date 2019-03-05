<template>
    <div>
        <div class="question"></div>
        <div class="answer"></div>
    </div>
</template>

<script>
    export default {
        name: "selectAnswer",
        data(){
            return {
                questionAndAnswer:[
                    {
                        knowledge:['javaScript'],
                        question:'关于javascript的原始类型（primitive type），错误的是',
                        answer:[
                            '有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String',
                            'var sTemp = "test string";alert (typeof sTemp);结果为string',
                            'var oTemp;alert(oTemp == undefined)为true',
                            'alert(null == undefined);结果为false',
                        ],
                        right:3
                    },
                ],
                userAnswer:[],
            }
        }
    }
</script>

<style scoped>

</style>