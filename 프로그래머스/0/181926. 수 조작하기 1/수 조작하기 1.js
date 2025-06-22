function solution(n, control) {
    var arr = [...control]
    var answer = 0;
    var wCount = arr.filter(element => 'w' === element).length;
    var sCount = arr.filter(element => 's' === element).length;
    var dCount = arr.filter(element => 'd' === element).length;
    var aCount = arr.filter(element => 'a' === element).length;
    
    return n + wCount - sCount + 10 * dCount - 10 * aCount;
    return answer;
}