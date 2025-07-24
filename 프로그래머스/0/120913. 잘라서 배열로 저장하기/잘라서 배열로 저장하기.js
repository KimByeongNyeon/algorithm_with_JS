function solution(my_str, n) {
    var answer = [];
    
    for (var i = 0; i < my_str.length; i += n) {
        answer.push(my_str.substr(i, n))
    }
    return answer;
}