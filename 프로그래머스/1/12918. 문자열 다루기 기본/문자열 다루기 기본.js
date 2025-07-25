function solution(s) {
    var answer = false
    var len = s.length;
    var pattern = /^\d+$/g
    if ((len === 4 || len === 6) && (pattern.test(s))) {
        return true
    }
    return answer;
}