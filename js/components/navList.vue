<template>
    <ul>
        <li v-cloak v-for="faNav in faNav" v-on:click="faNav.display = !faNav.display">
            {{ faNav.name }}<i v-if="!faNav.display">   +</i><i v-if="faNav.display">   -</i>
            <ul @click.stop>
                <li
                        v-for="sonNav in sonNav"
                        v-if="sonNav.sonNum == faNav.faNum && faNav.display"
                        v-on:click="onActive(sonNav)"
                        v-bind:class="{'active':sonNav.click}">
                    {{ sonNav.name }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "comp",
        data(){
            return {
                //父菜单列表
                faNav:[
                    {
                        name:'建议小功能',
                        faNum:1,
                        display:true,
                    }
                ],
                //子菜单列表
                sonNav:[
                    {
                        name:'简单记事本',
                        sonNum:1,
                        src:'notebook.html',
                        click:true,
                    },{
                        name:'商城购物车',
                        sonNum:1,
                        src:'testPage.html',
                        click:false,
                    },{
                        name:'文章删选',
                        sonNum:1,
                        src:'articleFilter.html',
                        click:false
                    }
                ],
                active:1
            }
        },
        methods:{
            onActive:function (ch) {
                sonnav = this.sonNav;
                for(var i = 0;i < sonnav.length;i++){
                    sonnav[i].click = false
                }
                document.getElementById('frame').src = ch.src;
                ch.click = !ch.click;
            },
        }
    }
</script>

<style scoped>
</style>