const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : path.join(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let idx = 0;
  const N = Number(input[idx++]);
  const dist = [];
  const arr = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    const dists = input[idx++].split(" ").map(Number);
    dist.push(dists);
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      arr[i][j] = dist[i][j];
    }
  }

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (i === j || i === k || k === j) {
          continue;
        }
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          console.log(-1);
          return;
        }
        if (dist[i][j] === dist[i][k] + dist[k][j]) {
          arr[i][j] = Infinity;
        }
      }
    }
  }
  let answer = 0;
  const check = Array.from({ length: N }, () => Array(N).fill(false));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === Infinity || arr[i][j] === 0 || check[i][j]) {
        continue;
      }
      answer += arr[i][j];
      check[j][i] = true;
      check[i][j] = true;
    }
  }
  console.log(answer);
};
solution(input);
