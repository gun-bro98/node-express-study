var M = {
    v : 'v',
    f : function(){
        console.log(this.v);
    }
}


// 모듈 구현에 있어 정해진 약속 같은 것
module.exports = M;
// 모듈은 다른 곳에서 사용할 수 있도록 exports한다.