function solution(arr, idx) {
    var answer = 0;
    for (var i = idx; i < arr.length; i++) {
        if (arr[i] == 1) {
            answer = i
            return answer
        } else if (arr[i] != 1) {
            answer = -1
        }
    }
    return answer;
}