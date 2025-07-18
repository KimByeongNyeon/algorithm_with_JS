function solution(num_list) {
    var answer = [];
    var sotredArr = num_list.sort((a, b) => a - b)
    for (var i = 0; i < 5; i++) {
        answer.push(sotredArr[i])
    }
    return answer;
}