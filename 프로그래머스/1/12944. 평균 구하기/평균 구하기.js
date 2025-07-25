function solution(arr) {
    var answer = arr.reduce((a, c) => a + c, 0) / arr.length;
    return answer;
}