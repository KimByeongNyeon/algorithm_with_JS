function solution(arr, k) {
    var answer = [...arr];
    for (var i = 0; i < arr.length; i++) {
        if (k % 2 == 1) {
            answer[i] = answer[i] * k
        } else {
            answer[i] = answer[i] + k
        }
    }
    return answer;
}