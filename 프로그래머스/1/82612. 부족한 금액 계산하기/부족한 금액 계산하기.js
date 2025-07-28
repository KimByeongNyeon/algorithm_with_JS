function solution(price, money, count) {
    var answer = -1;
    var par = 0
    for (var i = 1; i <= count; i++) {
        par += (price * i)
    }
    console.log(par)
    return par > money ? par - money : 0;
}