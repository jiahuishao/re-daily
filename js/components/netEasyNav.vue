<template>
    <div>
        <nav id="findMusicNav">
            <ul>
                <li v-for="findMusic in $store.state.findMusic">
                    <router-link :to="findMusic.path">{{ findMusic.navName }}</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "netEasyNav",
        components:{}
    }
</script>

<style scoped>
    #findMusicNav{
        width: 100%;
        height: 34px;
        background-color: #c20d0a;
    }
    #findMusicNav ul{
        width: 50%;
        height: 100%;
        margin:0 auto;
        display: flex;
        justify-content: center;
        font-size: 12px;
        background-color: #c20d0a;
    }
    #findMusicNav li{
        padding: 0 30px;
    }
</style>