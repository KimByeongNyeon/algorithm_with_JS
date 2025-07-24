function solution(i, j, k) {
    var answer = 0;
    for (var x = i; x <= j; x++) {
        let str = String(x);
        for (let ch of str) {
            if (ch === String(k)) {
                answer++;
            }
        }
    }
    return answer;
}