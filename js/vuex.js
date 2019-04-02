import Vue from 'vue'
import Vuex from 'vuex'
import vuextestApp from '../js/components/vuextest.vue'
import vuetestBro from '../js/components/vuextestBrr.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        age:22
    },
    mutations:{
        increment(state,obj){
            state.age += obj.todo
        }
    }
})

const vuextest = new Vue({
    el:'#vuextest',
    store,
    components:{vuextestApp,vuetestBro}
})