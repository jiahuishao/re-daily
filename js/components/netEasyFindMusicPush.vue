<template>
    <div>
        <div id="topBanner">
            <div class="topBannerContainer">
                <div class="topBannerLeft"></div>
                <div class="topBannerRight"></div>
            </div>
        </div>
        <div id="main">
            <div id="leftPart">
                <div id="hotPush">
                    <div class="blockTop">
                        <i class="listStyle">
                            <img :src="$store.state.indexPng" class="listStyleImg">
                        </i>
                        <span>热门推荐</span>
                        <span class="kind">
                            <div>华语</div>
                            <div>流行</div>
                            <div>摇滚</div>
                            <div>民谣</div>
                            <div>电子</div>
                        </span>
                        <span class="more">更多</span>
                    </div>
                    <div class="hotPushBody">
                        <div class="ablum" v-for="ablum in $store.state.ablum">
                            <div class="ablumImgContainer">
                                <img :src="ablum.imgSrc" class="ablumImg">
                                <img :src="$store.state.ablumCover" class="ablumCover">
                                <div class="listenTimes">{{ ablum.listenTimes }}</div>
                            </div>
                            <div class="ablumName">{{ ablum.ablumName }}</div>
                        </div>
                    </div>
                </div>
                <div id="newPush">
                    <div class="blockTop">
                        新碟上架
                    </div>
                </div>
                <div id="board">
                    <div class="blockTop">
                        榜单
                    </div>
                </div>
            </div>
            <div id="rightPart">
                <div class="userLogin"></div>
                <div class="singer"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "netEasyFindMusicPush",
        methods:{
            change(){

            }
        }
    }
</script>

<style scoped>
    *{
        box-sizing: content-box;
    }
    #topBanner{
        width: 100%;
        height: 334px;
        background-color: orange;
    }
    .topBannerContainer{
        width: 60%;
        height: 100%;
        margin: 0 auto;
        background-color: #232323;
    }
    #main{
        margin: 0 auto;
        width: 60%;
        display: flex;
        height: 800px;
        background: #fff;
        z-index: -1;
        border: 1px solid #d3d3d3;
    }
    #leftPart{
        box-sizing: border-box;
        width: 75%;
        padding: 20px;
    }
    #rightPart{
        width: 25%;
        background-color: darkcyan;
    }
    #hotPush,#newPush,#board{
        padding: 10px;
    }
    .listStyle{
        position: relative;
        width: 20px;
        height: 20px;
        overflow: hidden;
        margin-left: 5px;
    }
    .listStyle + span{
        margin-left: 5px;
    }
    .listStyleImg{
        position: absolute;
        top: -162px;
        left: -231px;
    }
    .blockTop{
        display: flex;
        align-items: center;
        padding: 5px;
        border-bottom: 2px solid red;
        font-size: 18px;
    }
    .kind{
        padding-left: 30px;
        display: flex;
        font-size: 10px;
    }
    .kind div{
        padding: 0px 10px 0px 10px;
        color: #666;
    }
    .kind div:not(:last-child){
        border-right: 1px solid #666;
    }
    .more{
        font-size: 10px;
        color: #333333;
        margin-left: 38%;
        overflow: hidden;
    }
    .hotPushBody{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .ablum{
        width: 140px;
    }
    .ablumImgContainer{
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        position: relative;
        overflow: hidden;
        margin-top: 30px;

    }
    .ablumImg{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .listenTimes{
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        padding: 5px;
        margin-top: 5px;
        bottom: 0;
        color: #fff;
        background-color: rgba(35,35,35,0.8);
    }
    .ablumCover{
        position: absolute;
        top: 0;
        left: 0;
    }
    .ablumName{
        font-size: 14px;
    }
    .userLogin{
        width: 100%;
        height: 100px;
        border: 1px solid #d3d3d3;
        z-index: 1;
        background:linear-gradient(to bottom,rgba(251,251,251,1),rgba(226,226,226,1));
    }
    .singer{
        width: 100%;
        height: 697px;
        border: 1px solid #d3d3d3;
        background-color: #ffffff;
    }
</style>