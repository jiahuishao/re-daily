import $ from 'jquery'
import Vue from 'vue'
import ccf from '../js/components/compCommFather.vue'
import ccs from '../js/components/compCommSon.vue'

var BaseMoney = 10000;
var pulsMoney = 10;

console.log($);
$('#youMoney').html(BaseMoney);

function addMoney(money) {
    BaseMoney += money;
    console.log(BaseMoney);
    $('youMoney').html(BaseMoney);
    return BaseMoney;
}

setInterval(function () {
    addMoney(pulsMoney)
},3000);

document.getElementById('buy').onclick = function () {
    BaseMoney -= 10000;
    pulsMoney += 100;
    return pulsMoney;
}

var comm = new Vue({
    el:'#comm',
    components:{ccf}
})
