function solution(num_list) {
    var answer = 0;
    var size = num_list.length
    if (size <= 10) {
        answer = 1
        for (var i = 0; i < size; i++) {
            answer *= num_list[i]
        } 
    } else {
        for (var i = 0; i < size; i++) {
            answer += num_list[i]
        }
    }
    return answer;
}