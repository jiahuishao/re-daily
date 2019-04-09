
// 闭包的学习
var praticeOne = function (a) {
    local = 1;
    var i = 0
    return function (b) {
        i++;
        console.log(i)
        return a*b;
    }
}

// var a = praticeOne(2);
// console.log(a(3));
// console.log(a(4));

// for(var i = 0;i < 5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

for(var p=0;p < 5;p++){
    (function (j) {
        setTimeout(()=>{
            console.log(j)
        },0)
    })(p)
}



