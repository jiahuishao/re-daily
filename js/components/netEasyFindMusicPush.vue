<template>
    <div>
        <div id="topBanner"></div>
        <div id="main">
            <div id="leftPart">
                <div id="hotPush">
                    <div class="blockTop">
                        热门推荐
                        <span class="kind">
                            <div>华语</div>
                            <div>流行</div>
                            <div>摇滚</div>
                            <div>民谣</div>
                            <div>电子</div>
                        </span>
                    </div>
                    <div></div>
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
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "netEasyFindMusicPush"
    }
</script>

<style scoped>
    *{
        box-sizing: content-box;
    }
    #main{
        margin: 0 auto;
        width: 60%;
        display: flex;
        height: 800px;
    }
    #leftPart{
        width: 75%;
    }
    #rightPart{
        width: 25%;
        background-color: darkcyan;
    }
    #hotPush,#newPush,#board{
        padding: 10px;
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
        font-size: 12px;
    }
    .kind div{
        padding: 0px 10px 0px 10px;
        color: #666;
    }
    .kind div:not(:last-child){
        border-right: 1px solid #666;
    }
</style>