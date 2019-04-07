<template>
    <div class="main">
        <div class="header">
            <div class="headerText">全部</div>
            <div class="choiceKind">选择分类</div>
            <button class="hot">热门</button>
            <button class="lastest">最新</button>
        </div>
        <div class="songSheetContainer">
            <div class="songSheetBlock" v-for="songSheet in songSheetCache">
                <div class="songSheetImg">
                    <img :src="songSheet.songSheetImg">
                </div>
                <div class="songSheetMessage">{{ songSheet.songSheetName }}</div>
                <div class="songSheetAnthor">by  {{ songSheet.songSheetAnthor }}</div>
            </div>
        </div>
        <div class="page">
            <ul class="pageGroup">
                <li class="pageBlock" @click="pageIndex--;filterSongSheet();"> < </li>
                <li class="pageBlock"
                    v-for="(page,index) in $store.state.songSheet"
                    v-if="index%20 == 0" @click="goto(index/20 + 1)"
                    :class="{'active':index/20 + 1 == pageIndex}">
                    {{ index/20 + 1 }}
                </li>
                <li class="pageBlock" @click="pageIndex++;filterSongSheet();"> > </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "netEasyFindMusicList",
        data(){
            return {
                pageIndex:1,
                songSheetCache: []
            }
        },
        methods:{
            filterSongSheet(){
                const songSheet = this.$store.state.songSheet;
                let max = songSheet.length;
                let pageIndex = this.pageIndex,bottom,top;
                top = pageIndex * 20;
                bottom = top - 20;
                if(max % pageIndex != 0){
                    top = bottom + (max % pageIndex);
                }
                this.songSheetCache = songSheet.slice(bottom,top);
            },
            goto(a){
                console.log(a);
                this.pageIndex = a;
                this.filterSongSheet();
            }
        },
        mounted() {
            this.filterSongSheet();
        }
    }
</script>

<style scoped>
    .main{
        margin: 0 auto;
        width: 60%;
        height: auto;
        background-color: #ffffff;
        border: 1px solid #d3d3d3;
        padding: 40px;
    }
    .header{
        box-sizing: border-box;
        width: 100%;
        height: auto;
        overflow: auto;
        zoom: 1;
        vertical-align: baseline;
        border-bottom: 1px solid #c20d0a;
    }
    .headerText,.choiceKind{
        float: left;
    }
    .headerText{
        margin: 15px 0 10px 15px;
        font-size: 16px;
        color: #c20d0a;
        font-weight: bolder;
        padding: 5px 5px 5px 0;
    }
    .choiceKind{
        margin: 15px 15px 10px 0;
        padding: 5px;
        border: 1px solid #d3d3d3;
        border-radius: 5px;
        font-size: 12px;
        cursor: pointer;
    }
    .hot,.lastest{
        outline: none;
        padding: 5px;
        float: right;
        font-size: 12px;
        cursor: pointer;
    }
    .hot{
        border: 1px solid #c20d0a;
        background-color: #c20d0a;
        color: #ffffff;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        margin: 15px 15px 10px 0;
    }
    .lastest{
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        margin: 15px 0 10px 15px;
    }
    .songSheetContainer{
        box-sizing: border-box;
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;
        justify-content: space-evenly;
    }
    .songSheetBlock{
        box-sizing: border-box;
        margin-top: 10px;
        padding: 10px;
        width: 20%;
    }
    .songSheetImg{
        width: 100%;
    }
    .songSheetImg>img{
        width: 100%;
    }
    .songSheetMessage{
        font-size: 12px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .songSheetAnthor{
        font-size: 12px;
        color: gray;
    }
    .page{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .pageGroup{
        margin: 0 auto;
        width: auto;
        display: flex;
        justify-content: flex-start;
        position: relative;
    }
    .pageBlock{
        cursor: pointer;
        margin-left: 10px;
        padding: 6px 12px;
        border-radius: 5px;
        border: 1px solid #c20d0a;
    }
    .active{
        background-color: #c20d0a;
        color: #ffffff;
    }
</style>