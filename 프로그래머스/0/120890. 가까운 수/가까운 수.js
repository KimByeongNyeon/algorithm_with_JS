function solution(array, n) {
    var minDiff = 999999;
    var answer = 0;
    for (var i = 0; i < array.length; i++) {
        const diff = Math.abs(n - array[i])
        if (diff < minDiff) {
            minDiff = diff;
            answer = array[i]
        } else if (diff === minDiff) {
            answer = Math.min(answer, array[i])
        }
    }
    return answer;
}