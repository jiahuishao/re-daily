import Vue from 'vue'
import Vuex from 'vuex'
import vuextestApp from '../js/components/vuextest.vue'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        age:22
    },
    mutations:{
        increment(state){
            state.age++
        }
    }
})

const vuextest = new Vue({
    el:'#vuextest',
    store,
    components:{vuextestApp}
})