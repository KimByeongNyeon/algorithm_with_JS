function solution(n) {
    var answer = [];
    // 재귀를 통해 최소 횟수 구하기
    const recur = (n, from, to, via) => {
        if (n === 1) {
            answer.push([from, to]) 
            return
        };
        recur(n - 1, from, via, to)
        answer.push([from, to])
        recur(n - 1, via, to, from)
    }
    recur(n, 1, 3, 2)
    return answer;
}