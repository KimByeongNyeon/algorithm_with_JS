function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        const prevWord = words[i - 1];
        const currWord = words[i];

        // 규칙 위반 1: 첫 글자가 이전 단어 마지막 글자와 다름
        if (prevWord[prevWord.length - 1] !== currWord[0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        // 규칙 위반 2: 이전에 이미 나온 단어
        if (words.indexOf(currWord) !== i) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
    }
    return [0, 0];
}
