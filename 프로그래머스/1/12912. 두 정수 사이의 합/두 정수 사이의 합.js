function solution(a, b) {
    var answer = 0;
    var arr = [a, b].sort((a, b) => a - b)
    
    for (var i = arr[0]; i <= arr[1]; i++) {
        answer += i
    }
    return answer;
}