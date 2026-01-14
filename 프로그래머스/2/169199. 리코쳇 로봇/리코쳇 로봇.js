const solution = (board) => {
  var answer = 0;
  const queue = [];
  const n = board.length;
  const m = board[0].length;
  board = board.map((row) => row.split(""));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "R") queue.push([i, j]);
    }
  }

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[queue[0][0]][queue[0][1]] = true;

  const bfs = () => {
    let head = 0;
    while (queue.length > head) {
      const size = queue.length - head;
      for (let s = 0; s < size; s++) {
        const [x, y] = queue[head++];

        for (let k = 0; k < 4; k++) {
          let nx = x 
          let ny = y

          while (true) {
            const tx = nx + dx[k];
            const ty = ny + dy[k];

            if (tx < 0 || tx >= n || ty < 0 || ty >= m) break;
            if (board[tx][ty] === "D") break;

            nx = tx;
            ny = ty;
          }

          if (nx === x && ny === y) continue;

          if (board[nx][ny] === "G") return answer + 1;

          if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
      answer++;
    }
    return -1;
  };
  return bfs();
};
