function solution(my_string, m, c) {
    var answer = '';
    var column = c - 1
    for (var i = 0; i < my_string.length; i++) {
        if (i % m == column) {
            answer += my_string[i]
        }
    }
    return answer;
}