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
  const arr = [];
  const [R, C] = input[idx++].split(" ").map(Number);
  for (let i = 0; i < R; i++) {
    arr.push(input[idx++].split(""));
  }
  let v = 0;
  let k = 0;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: R }, () => Array(C).fill(false));

  const dfs = (x, y) => {
    if (arr[x][y] === "v") v++;
    else if (arr[x][y] === "k") k++;
    visited[x][y] = true;

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (
        0 <= nx &&
        nx < R &&
        0 <= ny &&
        ny < C &&
        !visited[nx][ny] &&
        arr[nx][ny] != "#"
      ) {
        dfs(nx, ny);
      }
    }
  };
  let total = [0, 0];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (!visited[i][j] && arr[i][j] !== "#") {
        dfs(i, j);
        if (k > v) total[0] += k;
        else total[1] += v;
        v = 0;
        k = 0;
      }
    }
  }
  console.log(total.join(" "));
};
solution(input);
