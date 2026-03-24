const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "dev/stdin"
      : path.join(__dirname, "input.txt"),
  )
  .toString()
  .trim()
  .split("\n");
// 플로이드 워셜 풀이 100% 시간초과 날 거임
const solution = (input) => {
  let idx = 0;
  const [N, E] = input[idx++].split(" ").map(Number);
  const dist = Array.from({ length: N }, () => Array(N).fill(Infinity));
  for (let i = 0; i < N; i++) {
    dist[i][i] = 0;
  }
  for (let i = 0; i < E; i++) {
    const [a, b, c] = input[idx++].split(" ").map(Number);
    dist[a - 1][b - 1] = c;
    dist[b - 1][a - 1] = c;
  }

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  const [v1, v2] = input[idx++].split(" ").map(Number);

  const a = v1 - 1;
  const b = v2 - 1;
  let answer1 = dist[0][a] + dist[a][b] + dist[b][N - 1];
  let answer2 = dist[0][b] + dist[b][a] + dist[a][N - 1];
  if (
    dist[0][a] === Infinity ||
    dist[a][b] === Infinity ||
    dist[b][N - 1] === Infinity
  )
    answer1 = Infinity;
  if (
    dist[0][b] === Infinity ||
    dist[b][a] === Infinity ||
    dist[a][N - 1] === Infinity
  )
    answer2 = Infinity;
  let answer = Math.min(answer1, answer2);
  console.log(answer !== Infinity ? answer : -1);
};
solution(input);
