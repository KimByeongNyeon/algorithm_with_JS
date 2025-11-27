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
  let check = false;
  const dfs = (x, y) => {
    visited[x][y] = true;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (arr[x][y] < arr[nx][ny]) check = false;
        if (!visited[nx][ny] && arr[x][y] === arr[nx][ny]) {
          dfs(nx, ny);
        }
      }
    }
  };
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j]) {
        check = true;
        dfs(i, j);
        check ? cnt++ : "";
      }
    }
  }
  console.log(cnt);
};

solution(input);
