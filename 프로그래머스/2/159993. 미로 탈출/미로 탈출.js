function bfs(start, arr, end) {
    arr[start[0]][start[1]] = 'X'
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    let time = 0
    let queue = [start]
    
    while(queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()
            for (let k = 0; k < 4; k++) {
                let nx = x + dx[k]
                let ny = y + dy[k]

                if (0 <= nx && nx < arr.length && 0 <= ny && ny < arr[0].length && arr[nx][ny] !== 'X') {
                    if (arr[nx][ny] === end) {
                        return time + 1
                    }
                    arr[nx][ny] = 'X'
                    queue.push([nx, ny])

                }
            }
        }
        time++
    }
    return - 1
}

function solution(maps) {
    const arr = maps.map(row => row.split(""));
    let startCoord, leverCoord;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 'S') startCoord = [i, j];
            if (arr[i][j] === 'L') leverCoord = [i, j];
        }
    }

    const l = bfs(startCoord, arr.map(row => [...row]), 'L');
    const e = bfs(leverCoord, arr.map(row => [...row]), 'E');

    if (l === -1 || e === -1) return -1;
    return l + e;
}

