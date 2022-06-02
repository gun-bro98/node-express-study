function add2(a,b, callback){
    setTimeout(function(){
        var result = a+b;
        callback(result);
    },1000);
}

add2(10,20,function(result){
    console.log('%d', result);
});