function solution(my_string, is_suffix) {
    var answer = 0;
    var sufix = []
    for (var i = 0; i < my_string.length; i++) {
        sufix.push(my_string.substring(i, my_string.length))
    }
    console.log(sufix)
    sufix.forEach((value) => {
        if (value === is_suffix) {
            answer = 1
        }
    })
    return answer;
}