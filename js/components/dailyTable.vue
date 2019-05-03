<template>
    <div class="container">
        <div class="dayContainer">
            <div class="dayBlock" v-for="(day,index) in day" v-on:click="big(index,day.date)">
            </div>
        </div>
        <div class="singleDayBlock">
            <div v-on:click="close()">close</div>
            <div v-for="showDate in showDate">{{ showDate.note }}</div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "dailyTable",
        data() {
            return {
                day:[
                    {date:"2019-01-02",prots:0},
                    {date:"2019-01-03",prots:0},
                    {date:"2019-01-04",prots:0},
                    {date:"2019-01-05",prots:0},
                ],
                showDate:[

                ],
                freak:[
                    {data:"2019-01-02",note:"gogogogogogo"},
                    {data:"2019-01-02",note:"gogogogogogo"},
                    {data:"2019-01-02",note:"gogogogogogo"},
                    {data:"2019-01-02",note:"gogogogogogo"},
                    {data:"2019-01-02",note:"gogogogogogo"},
                    {data:"2019-01-04",note:"gogogogogogo"},
                    {data:"2019-01-03",note:"gogogogogogo"},
                    {data:"2019-01-04",note:"gogogogogogo"},
                    {data:"2019-01-04",note:"gogogogogogo"},
                    {data:"2019-01-02",note:"gogogogogogo"},
                    {data:"2019-01-05",note:"gogogogogogo"},
                ]
            }
        },
        methods:{
            big(a,b){
                var index = a + 1;
                $(".dayBlock:nth-child(" + index +")").addClass("ani");
                setTimeout(()=>{
                    $(".singleDayBlock").css({
                        display:"block"
                    })
                },500);
                this.freak.forEach(c=>{
                    if(c.data == b){
                        this.showDate.push(c);
                }
                })
            },
            close(){
                $(".singleDayBlock").css({
                    display:"none",
                })
                $(".dayBlock").removeClass("ani");
                this.showDate = [];
            },
            countNum(){
                this.day.forEach(a=>{
                    this.freak.forEach(b=>{
                        if(a.date == b.data){
                            a.prots += 1;
                        }
                    })
                })
            }
        },
        mounted(){
            this.countNum();
            var prots = this.day[0].prots
            var appendStr = "<style>.dayBlock:nth-child(even):before{" +
                "        content: \"\";\n" +
                "        position: absolute;\n" +
                "        top: 0;\n" +
                "        right: 100px;\n" +
                "        width: 100px;\n" +
                "        height: 100%;\n" +
                // "        background-color: #b5c0d6;\n" +
                "        text-align: center;\n" +
                "        line-height: 300%;}</style>";
            $(".dayBlock:nth-child(even)").append(appendStr);
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: auto;
    }
    .dayContainer{
        position: relative;
    }
    .singleDayBlock{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #c20d0a;
        display: none;
        transition: 0.5s;
    }
    .dayBlock{
        position: relative;
        width: 50px;
        height: 50px;
        margin: 50px auto;
        background-color: #c20d0a;
        color: #ffffff;
        border-radius: 100%;
    }
    .ani{
        animation: big .75s;
    }
    .dayBlock:nth-child(odd):before{
        content: "aaa";
        position: absolute;
        top: 0;
        left: 100px;
        width: 100px;
        height: 100%;
        background-color: #b5c0d6;
        text-align: center;
        vertical-align: middle;
    }
    .dayBlock:nth-child(even):before{

    }
    @keyframes big {
        0% {transform: scale(1)}
        100% {transform: scale(50)}
    }
    .in{
        width: 100%;
        height: 100%;
    }
</style>