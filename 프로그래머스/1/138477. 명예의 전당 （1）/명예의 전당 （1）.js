function solution(k, score) {
    const answer = [];
    const stack = [];
    for (let i = 0; i < score.length; i++) {
        if (stack.length < k) {
            stack.push(score[i]);
        } else {
            const min = Math.min(...stack);
            if (score[i] > min) {
                const minIndex = stack.indexOf(min);
                stack[minIndex] = score[i];
            }
        }
        answer.push(Math.min(...stack));
    }
    return answer;
}
