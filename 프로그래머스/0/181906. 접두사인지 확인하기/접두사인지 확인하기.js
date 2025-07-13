function solution(my_string, is_prefix) {
    var answer = 0;
    var prefix = []
    for (var i = 0; i < my_string.length; i++) {
        prefix.push(my_string.substring(0, i))
    }
    prefix.forEach((value) => {
        if (value == is_prefix) {
            answer = 1
        }
    })
    return answer;
}