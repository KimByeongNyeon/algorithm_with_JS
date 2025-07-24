function solution(num_list, n) {
    var answer = 0;
    for (var i = 0; i < num_list.length; i++) {
        if (num_list[i] === n) {
            return 1
        }
    }
    return answer;
}