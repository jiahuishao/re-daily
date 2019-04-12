import $ from 'jquery'
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


for(var p=0;p < 5;p++){
    (function (j) {
        setTimeout(()=>{

        },0)
    })(p)
}

var stduent = {
    age:18,
}


//不使用new
var students = [],man;

function createMan(i) {
    var man = {
        stduentId:i
    }
    man.__proto__ = stduent;
    return man;
}

for(var i = 0;i < 10;i++){
    students.push(createMan(i));
}

//使用new
var men = [];

function man(id) {
    this.id = id;
    this.sex = true;
}

man.prototype = {
    money:1000,
    walk:function () {
        console.log("walk");
    },
    run:function () {
        console.log("run");
    }
}

for(var i = 0;i < 5;i++){
    men.push(new man(i));
}

var output = $(".output");
var html = "";
html += '<div>';
for(let a = 0;a < 5;a ++){
    html += men[a].money
}
html += '</div>';
output.html(html);

function test(b) {
    var p = new Promise(function (resolve,reject) {
        var a = b;
        if(a != -1){
            console.log("111");
            resolve(a)
        }else if(a == -1){
            console.log("222");
            reject("aaa");
        }
    });
    return p;
}

function test2(b) {
    var p = new Promise(function (resolve,reject) {
        var a = b;
        if(a != -1){
            resolve(a)
        }else if(a == -1){
            reject("aaa");
        }
    });
    return p;
}


// test(-1).then(
//     function (data) {
//         console.log(data);
//     },
//     function (reason,data) {
//         console.log(reason);
//     })

Promise.all([test(1),test2(2)]).then(
    function (data) {
        console.log(data);
    },
    function (reason,data) {
        console.log(reason);
        console.log(data);
    }
)
