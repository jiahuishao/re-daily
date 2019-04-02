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
    #findMusicNav ul{
        width: 50%;
        margin:0 auto;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
    }
</style>