function solution(begin, target, words) {
    var answer = 0;
    var visited = Array(words.length).fill(false);
    
    if (!words.includes(target)) return 0
    
    const check = (begin_word, check_word) => {
        let diffCount = 0;
        for (let i = 0; i < begin_word.length; i++) {
            if (begin_word[i] !== check_word[i]) {
                diffCount++;
            }
        }
            return diffCount === 1;
    }
    
    const dfs = (begin, target, wrods, count) => {
        if (begin === target) {
            answer = count
            return;
        }
        for (var i = 0; i < words.length; i++) {
            if (!visited[i] && check(begin, words[i])) {
                visited[i] = true;
                dfs(words[i], target, words, count + 1)
                visited[i] = false;
            }
        }
    }
    dfs(begin, target, words, 0)

    return answer;
}