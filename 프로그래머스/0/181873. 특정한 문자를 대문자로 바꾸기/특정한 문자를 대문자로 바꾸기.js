function solution(my_string, alp) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++) {
        answer += my_string[i] === alp ? alp.toUpperCase() : my_string[i]
    }
    return answer;
}