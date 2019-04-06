<template>
    <div class="main">
        <div class="songSheetBlock" v-for="songSheet in $store.state.songSheet">
            <img :src="songSheet.songSheetImg">
            <div class="songSheetMessage">{{  }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "netEasyFindMusicList"
    }
</script>

<style scoped>
    .main{
        margin: 0 auto;
        width: 60%;
        height: 800px;
        background-color: #ffffff;
        border: 1px solid #d3d3d3;
        padding: 40px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .songSheetBlock{
        margin-left: 20px;
        margin-top: 20px;
    }
</style>