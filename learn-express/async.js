/*
function a(){
    console.log('A');
}
*/
var a = function (){
    console.log('A');
}

function slowfunc(callback){
    callback();
}
slowfunc(a);

var fs = require('fs');

console.log("-----------------------");
console.log("A");
// 비동기 처리 callback 함수
// callback 함수는 parameter가 반드시 함수인 함수라고도 볼 수 있다.
fs.readFile('sample.txt','utf8', function(err, result){
    console.log(result);
});

console.log('C');