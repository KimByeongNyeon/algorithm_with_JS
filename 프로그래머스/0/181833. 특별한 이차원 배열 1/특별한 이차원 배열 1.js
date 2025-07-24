function solution(n) {
    var answer = [[]];
    for (var i = 0; i < n; i++) {
        if (!answer[i]) answer[i] = [];
        for (var j = 0; j < n; j++) {
            if (i == j) {
                answer[i].push(1)
            } else {
                answer[i].push(0)
            }
        }
    }
    return answer;
}