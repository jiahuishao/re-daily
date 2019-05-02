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
                    {date:"2019-01-02"},
                    {date:"2019-01-03"},
                    {date:"2019-01-04"},
                    {date:"2019-01-05"},
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
                    console.log(b)
                    console.log(c.data);
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
            }
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
        animation: big 1s;
    }
    .dayBlock:nth-child(odd):before{
        content: "";
        position: absolute;
        top: 0;
        left: 100px;
        width: 100px;
        height: 100%;
        /*background-color: #333333;*/
    }
    .dayBlock:nth-child(even):before{
        content: "";
        position: absolute;
        top: 0;
        right: 100px;
        width: 100px;
        height: 100%;
        /*background-color: #333333;*/
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