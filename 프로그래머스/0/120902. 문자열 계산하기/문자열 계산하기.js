function solution(my_string) {
    var arr = my_string.split(" ")
    var answer = parseInt(arr[0]);
    for (var i = 1; i < arr.length; i+=2) {
        if (arr[i] == "+") {
            answer += parseInt(arr[i + 1])
        }else {
            answer -= parseInt(arr[i + 1])
        }
    }
    
    return answer;
}