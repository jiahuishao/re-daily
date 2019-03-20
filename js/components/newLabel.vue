<template>
    <div class="pos" v-on:touchmove="vueTouch" v-on:touchstart="vueToucha">
        <div id="sjh" class="clickBlock" v-on:click="change"></div>
    </div>
</template>

<script>
    import Vue from 'vue'

    Vue.directive('touchstart',{
        inserted:function (e) {
            console.log(11111)
        }
    })


    export default {
        name: "newLabel",
        data(){
            return {
                a:0,
                b:0,
                tf:false,
            }
        },
        methods:{
            vueToucha(e){
                this.b = e.touches[0].pageX;
                this.a = e.touches[0].pageY;
                console.log(this.b);
                console.log(this.a);
            },
            vueTouch(e){
                document.getElementsByClassName('pos')[0].style.top = e.touches[0].clientY + 'px';
                document.getElementsByClassName('pos')[0].style.left = e.touches[0].clientX + 'px';
            },
            change(){
                document.getElementById('sjh').classList.add('ani')
            }
        }
    }
</script>

<style scoped>
    .pos{
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        background-color: cornflowerblue;
    }
    .clickBlock{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: orangered;
        transform: scale(.1);
        opacity: 1;
    }

    @keyframes shao {
        0% {
            transform: scale(0.1);
        }
        100% {
            transform: scale(1.5);
        }
    }
    .ani{
        animation: shao 0.5s;
    }
</style>