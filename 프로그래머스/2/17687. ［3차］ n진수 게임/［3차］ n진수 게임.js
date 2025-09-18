function toNjinbeop(num, n) {
    return num.toString(n).toUpperCase()
}

function solution(n, t, m, p) {
    var answer = '';
    var num = 0
    var str = ''
    while (str.length < t * m) {
        str += toNjinbeop(num, n)
        num++
    }
    for (var i = 0; i < t; i++) {
        answer += str[i * m + (p - 1)]
    }
    return answer;
}