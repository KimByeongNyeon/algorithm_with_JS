function solution(array, commands) {
    var answer = [];
    for (var x = 0; x < commands.length; x++) {
        const [i, j, k] = commands[x];
        
        let result = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
        answer.push(result)
    }
    return answer;
}