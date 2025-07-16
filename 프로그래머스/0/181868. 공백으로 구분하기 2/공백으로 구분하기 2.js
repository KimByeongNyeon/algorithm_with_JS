function solution(my_string) {
    var answer = [];
    var arr = my_string.split(" ")
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            answer.push(arr[i])
        }
    }
    return answer;
}