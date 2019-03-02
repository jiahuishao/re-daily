import Vue from 'vue'

//购物车
var shopCar = new Vue({
    el:'#shopCar',
    data:{
        goods:[
            {
                name:'330ml红罐可乐',
                price:3.0,
                stock:100,
                id:'000001',
                inCar:0,
                allP:0,
                addNum:1,
                img:require('../../image/timg-pxz02.jpeg')
            },
            {
                name:'芝士蛋糕',
                price:28.0,
                stock:50,
                id:'000002',
                inCar:0,
                allP:0,
                addNum:1,
                img:require('../../image/timg-pxz02.jpeg')
            },
            {
                name:'大理石面包',
                price:10.0,
                stock:200,
                id:'000003',
                inCar:0,
                allP:0,
                addNum:1,
                img:require('../../image/timg-pxz02.jpeg')
            },
            {
                name:'macbook Pro',
                price:18888.0,
                stock:5,
                id:'000004',
                inCar:0,
                allP:0,
                addNum:1,
                img:require('../../image/timg-pxz02.jpeg')
            },
            {
                name:'猪肉脯',
                price:5.0,
                stock:500,
                id:'000005',
                inCar:0,
                allP:0,
                addNum:1,
                img:require('../../image/timg-pxz02.jpeg')
            },
            {
                name:'餐巾纸',
                price:2.0,
                stock:2000,
                id:'000006',
                inCar:0,
                allP:0,
                addNum:1,
                img:require('../../image/timg-pxz02.jpeg')
            },
        ],
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