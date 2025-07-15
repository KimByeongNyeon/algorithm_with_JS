function solution(arr) {
    var answer = [...arr];
    for (var i = 0; i < arr.length; i++) {
        if (answer[i] % 2 == 0 && answer[i] >= 50) {
            answer[i] = answer[i] / 2
        } else if (answer[i] % 2 != 0 && answer[i] < 50) {
            answer[i] = answer[i] * 2
        }
    }
    return answer;
}