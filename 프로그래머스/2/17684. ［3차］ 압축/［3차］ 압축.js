function solution(msg) {
    var answer = [];
    const alpha = {
                 A: 1, B: 2, C: 3, D: 4, 
                 E: 5, F: 6, G: 7, H: 8, 
                 I: 9, J: 10, K: 11, L: 12, 
                 M: 13, N: 14, O: 15, P: 16, 
                 Q: 17, R: 18, S: 19, T: 20, 
                 U: 21, V: 22, W: 23, 
                 X: 24, Y: 25, Z: 26
                };
    let last = 27;

    const word = msg.split("").reduce((a, b) => {
        // 다음 입력 값 구하기
        const nextWord = a + b;
        // 만약 다음 입력값이 사전에 없으면
        if (alpha[nextWord] === undefined) {
            // 사전에 새로운 단어 추가
            alpha[nextWord] = last++;
        } else {
            // 사전에 있으면 더 긴 단어를 만들 수 있으므로 계속 누적
            return nextWord
        }
        // 지금까지 만들어진 단어 a가 사전에 있었으므로 인덱스를 결과에 추가
        if (a !== undefined) answer.push(alpha[a])
        // 현재 글자 b를 기준으로 새로운 단어 탐색 시작
        return b;
    })

    // 마지막 단어의 인덱스 추가
    answer.push(alpha[word])
    return answer;
}
