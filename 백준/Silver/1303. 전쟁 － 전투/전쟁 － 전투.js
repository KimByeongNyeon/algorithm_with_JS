const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number); // N=가로(M), M=세로(N) 문제에 따라 다름
  // 백준 1303은 "N M" = 가로 N, 세로 M
  // 네 JS는 [N, M]을 행/열로 쓰고 있으니 아래처럼 맞춰주는게 안전:
  const cols = N; 
  const rows = M;

  const arr = Array.from({ length: rows }, (_, i) => input[i + 1].split(""));
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const bfs = (sx, sy, color) => {
    let head = 0;
    const q = [[sx, sy]];
    visited[sx][sy] = true;
    let cnt = 1;

    while (head < q.length) {
      const [x, y] = q[head++];

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (0 <= nx && nx < rows && 0 <= ny && ny < cols) {
          if (!visited[nx][ny] && arr[nx][ny] === color) {
            visited[nx][ny] = true;
            q.push([nx, ny]);
            cnt++;
          }
        }
      }
    }
    return cnt;
  };

  let w_total = 0;
  let b_total = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j]) {
        const color = arr[i][j];
        const size = bfs(i, j, color);
        if (color === "W") w_total += size * size;
        else b_total += size * size;
      }
    }
  }

  console.log(w_total, b_total);
};

solution(input);
