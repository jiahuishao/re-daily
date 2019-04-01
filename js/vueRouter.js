import vueRouter from 'vueRouter'
import aaa from 'vueRouter'
import Vue from 'vue'
import animatePratice from "../js/components/animatePratice.vue";
import articleFilter from "../js/components/articleFilter.vue";
import selectAnswer from "../js/components/selectAnswer.vue";
import singlePageArticle from "../js/components/newLabel.vue";


Vue.use(vueRouter);

const vuerouter = [
    {path:'/animatePratice',component:animatePratice},
    {path:'/articleFilter',component:articleFilter},
];

const anthorVuerouter = [
    {path:'/selectAnswer',component:selectAnswer},
    {path:'/singlePageArticle',component:singlePageArticle},
]

const router = new vueRouter({
    routes:vuerouter
})

const anthor = new aaa({
    routes: anthorVuerouter
})

let vuerouterc = new Vue({
    router:router,
}).$mount('#router');

let anthorVuerouterc = new Vue({
    router:anthor
}).$mount('#allStar');

router.push('/animatePratice');
anthor.push('/selectAnswer');