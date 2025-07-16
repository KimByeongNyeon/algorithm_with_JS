function solution(arr, flag) {
    var answer = [];
    for (var i = 0; i < flag.length; i++) {
        if (flag[i]) {
            for (var j = 0; j < arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            answer.splice(-arr[i], arr[i]); 
        }
    }
    return answer;
}
