function fn() {
    setTimeout(() => {
        console.log('하나');
        setTimeout(() => {
            console.log('둘');
            setTimeout(() => {
                console.log('셋');
            }, 0);
        }, 0);
    }, 0);
}
console.log("영");
fn(); // 결과 순서 => '하나', '둘', '셋'
console.log("넷");

