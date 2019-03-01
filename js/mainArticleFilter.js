//引入js
import Vue from 'vue'

//引入css
import '../css/globel.css'

//引入组件
import app from './components/articleFilter.vue'

const comp = new Vue({
    el:'#articleFilter',
    components:{app}
})