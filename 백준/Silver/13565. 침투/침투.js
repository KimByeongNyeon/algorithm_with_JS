const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "dev/stdin"
      : path.join(__dirname, "input.txt")
  )
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [M, N] = input[0].split(" ").map(Number);
  const arr = [];
  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  for (let i = 0; i < M; i++) {
    arr.push(input[i + 1].split("").map(Number));
  }
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const dfs = (x, y) => {
    visited[x][y] = true;
    if (x === M - 1) return true;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && nx < M && 0 <= ny && ny < N) {
        if (!visited[nx][ny] && arr[nx][ny] === 0) {
          if (dfs(nx, ny)) return true;
        }
      }
    }
    return false;
  };

  for (let j = 0; j < N; j++) {
    if (!visited[0][j] && arr[0][j] === 0) {
      if (dfs(0, j)) {
        console.log("YES");
        return;
      }
    }
  }

  console.log("NO");
};
solution(input);
