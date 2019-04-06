<template>
    <div>
        <div id="topBanner">
            <div class="topBannerImgSub"
                 :style="{backgroundImage: 'url(' + $store.state.bannerPng + ')'}"
                 @click="topBannerImgSub"></div>
            <div class="topBannerContainer">
                <div class="topBannerLeft"
                     :style="{backgroundImage: 'url(' + $store.state.indexBannerImg[0].imgSrc + ')'}"></div>
                <div class="topBannerRight">
                    <button class="downloadBtn">下载客户端</button>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </div>
            </div>
            <div class="topBannerImgPlus"
                 :style="{backgroundImage: 'url(' + $store.state.bannerPng + ')'}"
                 @click="topBannerImgPlus"></div>
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
                                <div class="listenTimes">{{ ablum.listenTimes | capitalize }}</div>
                            </div>
                            <div class="ablumName">{{ ablum.ablumName }}</div>
                        </div>
                    </div>
                </div>
                <div id="newPush">
                    <div class="blockTop">
                        <i class="listStyle">
                            <img :src="$store.state.indexPng" class="listStyleImg">
                        </i>
                        <span>新碟上架</span>
                    </div>
                    <div class="newPushBody">
                        <div class="newPushContainer">
                            <div v-for="musicAblum in $store.state.MusicAblum" class="newPushBlock">
                                <div class="musicAblumCover"
                                     :style="{backgroundImage: 'url(' + musicAblum.MusicAblumCoverImgSrc + ')'}">
                                    <div class="newPushAblumCover"
                                         :style="{backgroundImage: 'url(' + $store.state.ablumCover + ')'}">

                                    </div>
                                </div>
                                <div class="musicAblumName">{{ musicAblum.MusicAblumName }}</div>
                                <div class="musicAblumSinger">{{ musicAblum.Singer }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="board">
                    <div class="blockTop">
                        <i class="listStyle">
                            <img :src="$store.state.indexPng" class="listStyleImg">
                        </i>
                        <span>榜单</span>
                    </div>
                    <div class="boardBody">
                        <div class="boardContainer">
                            <div class="couldMusicUpBoard zebra">
                                <div class="couldMusicBoardHeader">
                                    <div :style="{backgroundImage: 'url(' + $store.state.imgGroup.upJpeg + ')'}">
                                        <div class="cover" :style="{backgroundImage: 'url(' + $store.state.ablumCover + ')'}">
                                        </div>
                                    </div>
                                    <span class="Header">云音乐飙升榜</span>
                                </div>
                                <div v-for="(couldMusicBoard,index) in couldMusicUpBoard">
                                    {{ index+1 }} {{ couldMusicBoard.MusicName }}
                                </div>
                                <div class="couldMusicBoardFooter">查看全部 > </div>
                            </div>
                            <div class="couldMusicNewBoard zebra">
                                <div class="couldMusicBoardHeader">
                                    <div :style="{backgroundImage: 'url(' + $store.state.imgGroup.newJpeg + ')'}">
                                        <div class="cover" :style="{backgroundImage: 'url(' + $store.state.ablumCover + ')'}">
                                        </div>
                                    </div>
                                    <span class="Header">云音乐新歌榜</span>
                                </div>
                                <div v-for="(couldMusicNewBoard,index) in couldMusicNewBoard">
                                    {{ index+1 }} {{ couldMusicNewBoard.MusicName }}
                                </div>
                                <div class="couldMusicBoardFooter">查看全部 > </div>
                            </div>
                            <div class="couldMusicOriginalBoard zebra">
                                <div class="couldMusicBoardHeader">
                                    <div :style="{backgroundImage: 'url(' + $store.state.imgGroup.originJpeg + ')'}">
                                        <div class="cover" :style="{backgroundImage: 'url(' + $store.state.ablumCover + ')'}">
                                        </div>
                                    </div>
                                    <span class="Header">网易原创歌曲榜</span>
                                </div>
                                <div v-for="(couldMusicOriginalBoard,index) in couldMusicOriginalBoard">
                                    {{ index+1 }} {{ couldMusicOriginalBoard.MusicName }}
                                </div>
                                <div class="couldMusicBoardFooter">查看全部 > </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="rightPart">
                <div class="userLoginBlock">
                    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <button class="userLogin">用户登录</button>
                </div>
                <div class="singer">
                    <div class="singerHeader">
                        <div>入驻歌手</div>
                        <div>查看全部 ></div>
                    </div>
                    <hr>
                    <div class="singerList">
                        <div class="singerBlock" v-for="singer in $store.state.singerList">
                            <div class="singerImg">
                                <img :src="singer.singerImg">
                            </div>
                            <div class="singerTxt">
                                <div class="singerName">{{ singer.singerName }}</div>
                                <div class="singerSummary">{{ singer.singerSummary }}</div>
                            </div>
                        </div>
                    </div>
                    <button class="applyBecomeSingerBtn">申请成为网易音乐人</button>
                    <div class="anchorHeader">
                        <div>热门主播</div>
                    </div>
                    <hr>
                    <div class="anchorList">
                        <div class="anchorBlock" v-for="anchor in $store.state.anchorList">
                            <div class="anchorImg">
                                <img :src="anchor.anchorImg">
                            </div>
                            <div class="anchorTxt">
                                <div class="anchorName">{{ anchor.anchorName }}</div>
                                <div class="anchorSummary">{{ anchor.anchorSummary }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "netEasyFindMusicPush",
        data(){
            return {
                indexBannerImgIndex: 0,
                couldMusicUpBoard:[],
                couldMusicNewBoard:[],
                couldMusicOriginalBoard:[],
            }
        },
        methods:{
            //对对象进行排序，property为排序属性名，rev降序或升序
            compare(property,rev){
                if(rev ==  undefined){
                    rev = 1;
                }else{
                    rev = (rev) ? 1 : -1;
                }
                return function (a,b) {
                    a = a[property];
                    b = b[property];
                    if(a < b){
                        return rev * -1;
                    }
                    if(a > b){
                        return rev * 1;
                    }
                    return 0;
                }
            },

            getCouldMusicOriginalBoard(){
                const Music = this.$store.state.Music;
                Music.forEach(a=>{
                    if(a.originSign){
                        this.couldMusicOriginalBoard.push(a);
                    }
                })
                this.couldMusicOriginalBoard.sort(this.compare('MusicHeat',false));
                this.couldMusicOriginalBoard = this.couldMusicOriginalBoard.slice(0,10);
            },

            getCouldMusicNewBoard(){
                const Music = this.$store.state.Music;
                Music.forEach(a=>{
                    if(a.MusicPushTime > '2019-01-01'){
                        this.couldMusicNewBoard.push(a);
                    }
                })
                this.couldMusicNewBoard.sort(this.compare('MusicHeat',false));
                this.couldMusicNewBoard = this.couldMusicNewBoard.slice(0,10);
            },

            getCouldMusicUpBoard(){
                const Music = this.$store.state.Music;
                Music.sort(this.compare('MusicHeat',false));
                this.couldMusicUpBoard = Music.slice(0,10);
            },

            row(){
                const imgGroup = this.$store.state.indexBannerImg;
                setInterval(a=>{
                    document.getElementsByClassName('topBannerLeft')[0]
                        .style.backgroundImage = 'url(' + imgGroup[this.indexBannerImgIndex].imgSrc + ')';
                    document.getElementById('topBanner')
                        .style.backgroundColor = imgGroup[this.indexBannerImgIndex].imgSrcBackgroundColor;
                    this.indexBannerImgIndex + 1 > 2 ? this.indexBannerImgIndex = 0 : this.indexBannerImgIndex ++;
                },3000)
            },

            topBannerImgSub(){
                const imgGroupSub = this.$store.state.indexBannerImg;
                this.indexBannerImgIndex - 1 < 0 ? this.indexBannerImgIndex = 2 : this.indexBannerImgIndex -= 1;
                console.log(this.indexBannerImgIndex);
                document.getElementsByClassName('topBannerLeft')[0]
                    .style.backgroundImage = 'url(' + imgGroupSub[this.indexBannerImgIndex].imgSrc + ')';
                document.getElementById('topBanner')
                    .style.backgroundColor = imgGroupSub[this.indexBannerImgIndex].imgSrcBackgroundColor;
            },

            topBannerImgPlus() {
                const imgGroupPlus = this.$store.state.indexBannerImg;
                this.indexBannerImgIndex + 1 > 2 ? this.indexBannerImgIndex = 0 : this.indexBannerImgIndex += 1;
                document.getElementsByClassName('topBannerLeft')[0]
                    .style.backgroundImage = 'url(' + imgGroupPlus[this.indexBannerImgIndex].imgSrc + ')';
                document.getElementById('topBanner')
                    .style.backgroundColor = imgGroupPlus[this.indexBannerImgIndex].imgSrcBackgroundColor;
            }
        },

        filters:{
            capitalize:function(value){
                return value/10000 + '万'
            }
        },

        mounted() {
            this.row();
            this.getCouldMusicUpBoard();
            this.getCouldMusicNewBoard();
            this.getCouldMusicOriginalBoard()
        }
    }
</script>

<style scoped>
    *{
        box-sizing: content-box;
    }
    .topBannerImgSub{
        position: relative;
        left: 15%;
        top: 40%;
        width: 37px;
        height: 63px;
        background-position: 0 10170px;
        cursor: pointer;
    }
    .topBannerImgPlus{
        position: relative;
        right: 15%;
        top: 40%;
        width: 37px;
        height: 63px;
        background-position: 0 10020px;
        cursor: pointer;
    }
    #topBanner{
        width: 100%;
        height: 334px;
        overflow: hidden;
        background-color:#73a6da;
        transition: 1s;
        display: flex;
        justify-content: center;
    }
    .topBannerContainer{
        width: 60%;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    .topBannerLeft{
        width: 75%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        transition: 1s;
    }
    .topBannerRight{
        width: 25%;
        height: 100%;
        background: radial-gradient(rgba(41,42,42,.8),rgba(16,18,20,.8));
        box-shadow: 0 3px 10px #232323;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .downloadBtn{
        width: 90%;
        height: 50px;
        margin-top: 70%;
        background:linear-gradient(to bottom,#4987eb,#1d63c1);
        border: 0 solid;
        border-radius: 2px;
        box-shadow: 0 0 1px #333;
        outline: none;
        font-size: 20px;
        color: #e0e5f2;
    }
    .downloadBtn+p{
        margin-top: -15%;
        font-size: 0.25em;
        color: gray;
    }
    #main{
        margin: 0 auto;
        width: 60%;
        display: flex;
        height: auto;
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
        position: relative;
        width: 25%;
        height: auto;
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
        font-size: 12px;
    }
    .ablumCover{
        position: absolute;
        top: 0;
        left: 0;
    }
    .ablumName{
        font-size: 14px;
    }
    .userLoginBlock{
        box-sizing: border-box;
        width: 100%;
        height: 120px;
        padding: 10px;
        border: 1px solid #d3d3d3;
        z-index: 1;
        background:linear-gradient(to bottom,rgba(251,251,251,1),rgba(226,226,226,1));
    }
    .userLoginBlock>p{
        font-size: .25em;
        text-align: center;
    }
    .userLogin{
        margin-left: 30%;
        padding: 5px 20px;
        border: 0 solid;
        border-radius: 5px;
        background: linear-gradient(to bottom,#e0161e,#bd050b);
        color: #ffffff;
        outline: none;
    }
    .singer{
        box-sizing: border-box;
        position: absolute;
        top: 120px;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        border: 1px solid #d3d3d3;
        background-color: #ffffff;
    }
    .singerHeader,.anchorHeader{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .singerHeader>div:first-child{
        font-weight: bold;
    }
    .singerHeader>div:last-child{
        color: gray;
    }
    .applyBecomeSingerBtn{
        box-sizing: border-box;
        outline: none;
        width: 100%;
        margin-top: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 4px;
        background: linear-gradient(to bottom,#fefefe,#f2f2f2);
    }
    .newPushBody{
        width: 100%;
        height: 186px;
        padding: 30px 0;
    }
    .newPushContainer{
        box-sizing: border-box;
        padding: 25px 10px;
        width: 100%;
        height: 184px;
        background-color: #f5f5f5;
        border: 1px solid #d3d3d3;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .newPushBlock:not(:first-child){
        margin-left: 20px;
    }
    .boardBody{
        width: 100%;
        height: 472px;
        padding: 30px 0;
    }
    .boardContainer{
        width: 100%;
        height: auto;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
    }
    .musicAblumCover{
        box-sizing: border-box;
        width: 115px;
        height: 100px;
        background-repeat: no-repeat;
        position: relative;
    }
    .newPushAblumCover{
        position: absolute;
        background-position: 0 -570px;
        width: 100%;
        height: 100%;
    }
    .musicAblumName{
        font-size: 12px;
    }
    .musicAblumSinger{
        font-size: 10px;
        color: gray;
    }
    .zebra:first-child{
        width: 33%;
        height: 100%;
        border: 1px solid #d3d3d3;
    }
    .zebra{
        width: 33%;
        height: 100%;
        border-right: 1px solid #d3d3d3;
        border-top: 1px solid #d3d3d3;
        border-bottom: 1px solid #d3d3d3;
    }
    .couldMusicBoardHeader{
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 30px;
        display: flex;
    }
    .couldMusicBoardHeader > div{
        width: 80px;
        height: 80px;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
    }
    .cover{
        width: 100%;
        height: 100%;
        position: absolute;
        background-position: -145px -57px;
    }
    .Header{
        width: 45%;
        font-size: .5em;
        margin-left: 10px;
        white-space: nowrap;
    }
    .couldMusicBoardFooter{
        box-sizing: border-box;
        width: 100%;
        text-align: right;
    }
    .zebra>div:not(:first-child){
        padding: 8px 30px;
        font-size: .5em;
    }
    .zebra>div:nth-of-type(odd){
        background-color: #f4f4f4;
    }
    .zebra>div:nth-of-type(even){
        background-color: #e8e8e8;
    }
    .singerBlock{
        width: 100%;
        margin-top: 20px;
        display: flex;
        border: 1px solid #d3d3d3;
    }
    .anchorBlock{
        width: 100%;
        margin-top: 10px;
        display: flex;
    }
    .singerImg{
        width: 62px;
        height: 62px;
    }
    .anchorImg{
        width: 40px;
        height: 40px;
    }
    .singerTxt{
        box-sizing: border-box;
        padding: 5px;
        height: 100%;
    }
    .anchorTxt{
        box-sizing: border-box;
        padding-left: 10px;
        height: 100%;
    }
    .singerName{
        font-size: 14px;
    }
    .anchorName{
        font-size: 10px;
    }
    .singerSummary{
        width: 100px;
        margin-top: 10px;
        font-size: 12px;
        white-space: nowrap;
        color: gray;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .anchorSummary{
        width: 150px;
        margin-top: 2px;
        font-size: 10px;
        white-space: nowrap;
        color: gray;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>