function solution(s) {
    var answer = '';
    var mid = parseInt(s.length / 2)
    var len = s.length
    console.log(mid)
    if (len % 2 == 1) {
        answer = s[mid]
    } else {
        answer = s.substring(mid - 1, mid + 1)
    }
    return answer;
}