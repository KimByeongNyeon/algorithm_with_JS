function solution(num, total) {
    var answer = [];
    const start = total / num - (num - 1) / 2;
    
    for (var i = 0; i < num; i++) {
        answer.push(start + i)
    }
    return answer;
}