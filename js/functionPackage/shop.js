import Vue from 'vue'
import {shopCar as sc} from "../dataSave/dataSave";

'../dataSave/dataSave.js'
//购物车
var shopCar = new Vue({
    el:'#shopCar',
    data:{
        goods:sc,
        sumPrice:0,
    },
    methods:{
        addGoods:function (good) {
            if(good.stock - good.addNum < 0){
                alert('库存不足');
                return;
            }
            good.stock -= good.addNum;
            good.inCar += good.addNum;
        },
        subGoods:function (good) {
            if(good.inCar - good.addNum < 0){
                alert('您没有购买该商品');
                return;
            }
            good.stock += good.addNum;
            good.inCar -= good.addNum;
        },
        clean:function (inCar) {
            inCar.stock += inCar.inCar;
            inCar.inCar = 0;
        },
        clearAll:function () {
            const goods = this.goods;
            for(var i = 0;i < goods.length;i++){
                goods[i].inCar = 0;
            }
        }
    },
    computed:{
        sum: function () {
            var a = 0;
            const goods = this.goods;
            for(var i = 0;i < goods.length;i++){
                var num = goods[i].inCar;
                var singlePrice = goods[i].price;
                a += num * singlePrice;
            }
            this.sumPrice = a;
            sessionStorage.setItem('sumPrice',a);
            return a;
        }
    }
})