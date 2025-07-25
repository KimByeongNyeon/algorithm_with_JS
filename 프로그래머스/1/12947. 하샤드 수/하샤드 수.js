function solution(x) {
    var answer = true;
    var arr = String(x).split('').map((value) => parseInt(value))
    
    return x % (arr.reduce((a, b) => a + b)) == 0 ? true : false ;
}