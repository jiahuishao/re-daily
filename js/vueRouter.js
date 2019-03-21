import vueRouter from 'vueRouter'
import Vue from 'vue'
import animatePratice from "../js/components/animatePratice.vue";
import articleFilter from "../js/components/articleFilter.vue";

Vue.use(vueRouter);

const vuerouter = [
    {path:'/animatePratice',component:animatePratice},
    {path:'/articleFilter',component:articleFilter},
];

const router = new vueRouter({
    routes:vuerouter
})

let vuerouterc = new Vue({
    router:router,
}).$mount('#router');

router.push('/animatePratice')