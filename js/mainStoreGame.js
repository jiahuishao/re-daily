import $ from 'jquery'

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
