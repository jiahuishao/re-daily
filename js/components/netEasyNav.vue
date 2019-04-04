<template>
    <div>
        <nav id="findMusicNav">
            <ul>
                <li v-for="findMusic in $store.state.findMusic" @click="click(findMusic)" :class="{'sonactive':findMusic.active}">
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
        components:{},
        methods:{
            click(a){
                this.$store.commit("Sonclick",a)
            }
        }
    }
</script>

<style scoped>
    #findMusicNav{
        width: 100%;
        height: 34px;
        background-color: #c20d0a;
        z-index: 2;
    }
    #findMusicNav ul{
        width: 50%;
        height: 100%;
        margin:0 auto;
        display: flex;
        justify-content: center;
        font-size: .25em;
        background-color: #c20d0a;
    }
    #findMusicNav li{
        box-sizing: border-box;
        border-radius: 15px;
        padding: 5px 10px;
        margin: 0 30px;
    }
    .sonactive{
        background-color: #9B0909;
    }
</style>