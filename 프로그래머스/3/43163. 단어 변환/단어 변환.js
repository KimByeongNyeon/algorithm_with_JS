// function solution(begin, target, words) {
//     var answer = 0;
//     var visited = Array(words.length).fill(false);
    
//     if (!words.includes(target)) return 0
    
//     const check = (begin_word, check_word) => {
//         let diffCount = 0;
//         for (let i = 0; i < begin_word.length; i++) {
//             if (begin_word[i] !== check_word[i]) {
//                 diffCount++;
//             }
//         }
//             return diffCount === 1;
//     }
    
//     const dfs = (begin, target, wrods, count) => {
//         if (begin === target) {
//             answer = count
//             return;
//         }
//         for (var i = 0; i < words.length; i++) {
//             if (!visited[i] && check(begin, words[i])) {
//                 visited[i] = true;
//                 dfs(words[i], target, words, count + 1)
//                 visited[i] = false;
//             }
//         }
//     }
//     dfs(begin, target, words, 0)

//     return answer;
// }

const solution = (begin, target, words) => {
    const isSet = (a, b) => {
        let cnt = 0
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                cnt++
            }
        }
        if (cnt === 1) return true
        else return false;
    }
    let visited = new Set()
    const bfs = () => {
        visited.add(begin)
        let queue = [[begin, 0]];
        let head = 0;
        
        while(queue.length > head) {
            let [next, depth] = queue[head++]
            if (next === target) {
                return depth;
            }
            
            for (let word of words) {
                if (isSet(next, word) && !visited.has(word)) {
                    visited.add(word)
                    queue.push([word, depth+1])
                }
            }
        }
        return 0
    }
    let result = bfs()
    return result
    
}