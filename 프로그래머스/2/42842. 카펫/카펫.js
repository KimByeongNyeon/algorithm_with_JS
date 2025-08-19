function solution(brown, yellow) {
    var answer = [];
    // 세로 3이상 세로 x 가로 = brown + yellow
    for (var i = 3; i <= (brown + yellow) / 3; i++) {
        let x = (brown + yellow) / i
        if((x - 2) * (i - 2) === yellow) {
            answer.push(x);
            answer.push(i);
            break;
        }
    }
    return answer;
}