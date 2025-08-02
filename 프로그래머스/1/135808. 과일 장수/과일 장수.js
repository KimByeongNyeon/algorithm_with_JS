function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a)
    let box_count = Math.floor(score.length / m)
    let i = 0;
    let end = m
    while (i < score.length) {
        const apple = score.slice(i, end)
        i += m
        end += m
        if (apple.length === m) {
            answer += Math.min(...apple) * m
        } 
    }
    return answer;
}