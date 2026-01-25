const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "input.txt")
  )
  .toString()
  .trim()
  .split("\n");
const solution = (input) => {
  const arr = input[0].split(" ").map(Number);
  const N = arr.shift();
  const mappedArr = arr.map((value) => value / 100);
  const size = N * 2 + 1;
  const visited = Array.from({ length: size }, () => Array(size).fill(false));

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let answer = 0;

  const dfs = (x, y, depth, percentage) => {
    visited[x][y] = true;
    if (depth === N) {
      answer += percentage;
      return;
    }

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        dfs(nx, ny, depth + 1, percentage * mappedArr[k]);
        visited[nx][ny] = false;
      }
    }
  };

  dfs(N, N, 0, 1);
  console.log(answer);
};

solution(input);
