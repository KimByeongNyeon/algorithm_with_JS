function solution(s) {
    var len = s.length;
    var answer = s[0] == "-" ? -1 * parseInt(s.substring(1, len)) : parseInt(s);
    return answer;
}