function solution(arr, idx) {
    var answer = -1;
    for (var i = idx; i < arr.length; i++) {
        if (arr[i] == 1) {
            answer = i
            return answer
        }
    }
    return answer;
}