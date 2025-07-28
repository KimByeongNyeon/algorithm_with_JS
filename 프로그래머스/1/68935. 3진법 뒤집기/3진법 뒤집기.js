function solution(n) {
    var answer = 0;
    var three = n.toString(3)
    var arr = [...three].reverse()
    answer = parseInt(arr.join(''), 3)
    return answer;
}