<template>
    <div class="pos" v-on:touchmove="vueTouch" v-on:touchstart="vueToucha" v-on:click="change">sssss</div>
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
                let pa = (e.touches[0].clientY - this.a);
                let pb = (e.touches[0].clientX - this.b);
                document.getElementsByClassName('pos')[0].style.top = pa + 'px';
                document.getElementsByClassName('pos')[0].style.left = pb + 'px';
            },
            change(e){
                document.getElementsByClassName('pos')[0].innerHTML = 'change';
            }
        }
    }
</script>

<style scoped>
    .pos{
        position: fixed;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        background-color: cornflowerblue;
    }
</style>