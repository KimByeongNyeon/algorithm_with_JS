function solution(arr, k) {
    var answer = [];
    const set = new Set(arr)
    answer = [...set].slice(0, k)
    while (answer.length !== k) {
        answer.push(-1)
    }
    return answer;
}