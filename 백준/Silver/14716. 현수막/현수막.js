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
  let idx = 0;
  const [N, M] = input[idx++].split(" ").map(Number);
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[idx++].split(" ").map(Number));
  }

  const dx = [-1, 1, 0, 0, -1, 1, 1, -1];
  const dy = [0, 0, -1, 1, -1, 1, -1, 1];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dfs = (x, y) => {
    visited[x][y] = true;
    let nx = 0;
    let ny = 0;
    for (let k = 0; k < 8; k++) {
      nx = x + dx[k];
      ny = y + dy[k];

      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < M &&
        !visited[nx][ny] &&
        arr[nx][ny] === 1
      ) {
        visited[nx][ny] = true;
        dfs(nx, ny);
      }
    }
  };
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && arr[i][j] === 1) {
        dfs(i, j);
        cnt += 1;
      }
    }
  }
  console.log(cnt);
};
solution(input);
