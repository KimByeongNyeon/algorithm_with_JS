function solution(n, computers) {
    var answer = 0;
    var visited = [false, false, false];
    
    const dfs = (index, depth = 0) => {
        const indent = ' '.repeat(depth * 2);
        visited[index] = true;
        for (var i = 0; i < computers.length; i++) {
            if (!visited[i] && computers[index][i]) {
                dfs(i, depth += 1)
            }
        }
    }
    
    for (var i = 0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i)
            answer++
        }
    }
    return answer;
}