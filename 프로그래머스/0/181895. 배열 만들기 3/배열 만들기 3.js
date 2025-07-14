function solution(arr, intervals) {
    var answer = [];
    return intervals
        .map(([start, end]) => arr.slice(start, end + 1))
        .flat();
}