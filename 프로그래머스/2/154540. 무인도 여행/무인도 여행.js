function solution(maps) {
    var answer = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const dfs = (row, col) => {
        let total = Number(maps[row][col]);
        visited[row][col] = true;
        
        for (var k = 0; k < 4; k++) {
            let n_row = row + dx[k];
            let n_col = col + dy[k];
            if (0 <= n_row && n_row < n && 0 <= n_col && n_col < m && maps[n_row][n_col] !== 'X' && !visited[n_row][n_col]) {
                total += dfs(n_row, n_col);
            }
        }
        console.log(total)
        return total
    }
    
    for (var i = 0; i < maps.length; i++) {
        for (var j = 0; j < maps[0].length; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]){
                answer.push(dfs(i, j))
            }
        }
    }
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

