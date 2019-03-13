<template>
    <div>
        <div class="tabGroup">
            <div class="tab" v-on:click="changeComp('singlePageArticle')">singlePageArticle{{ commData[0].length }}</div>
            <div class="tab" v-on:click="changeComp('singlePageFans')">singlePageFans{{ commData[1].length }}</div>
            <div class="tab" v-on:click="changeComp('articleFilter')">articleFilter</div>
        </div>
        <div>
            <keep-alive>
                <component v-bind:is="showComp" :data="commData"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import singlePageArticle from '../components/singlePageArticle.vue'
    import singlePageFans from '../components/singlePageFans.vue'
    import articleFilter from '../components/articleFilter.vue'

    import '../../css/globel.css'
    import '../../css/singlePage.css'

    import {article as af} from '../dataSave/dataSave.js'
    import {firends as frd} from '../dataSave/dataSave.js'

    let array = [af,frd];

    export default {
        name: "singlePage",
        data(){
            return {
                compList:[
                    {compName:'singlePageFans'},{compName:'singlePageArticle'},{compName:'articleFilter'}
                ],
                showComp:'',
                commData:array
            }
        },
        components:{singlePageFans,singlePageArticle,articleFilter},
        methods:{
            changeComp(a){
                this.showComp = a;
            }
        }
    }
</script>

<style scoped>

</style>