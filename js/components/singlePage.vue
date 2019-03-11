<template>
    <div>
        <button v-on:click="changeComp('singlePageArticle')">singlePageArticle</button>
        <button v-on:click="changeComp('singlePageFans')">singlePageFans</button>
        <keep-alive>
            <component v-bind:is="showComp" :data="commData"></component>
        </keep-alive>
    </div>
</template>

<script>
    import singlePageArticle from '../components/singlePageArticle.vue'
    import singlePageFans from '../components/singlePageFans.vue'

    export default {
        name: "singlePage",
        data(){
            return {
                compList:[
                    {compName:'singlePageFans'},{compName:'singlePageArticle'}
                ],
                showComp:'',
                commData:[1,2,3,4]
            }
        },
        components:{singlePageFans,singlePageArticle},
        methods:{
            changeComp(a){
                this.showComp = a;
            }
        }
    }
</script>

<style scoped>

</style>