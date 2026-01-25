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
  let idx = 0;
  const [N, M] = input[idx++].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);
  const revers = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    graph[a].push(b);
    revers[b].push(a);
  }

  let answer = 0;

  const dfs = (x, graph, visited) => {
    for (let nx of graph[x]) {
      if (!visited[nx]) {
        visited[nx] = true;
        dfs(nx, graph, visited);
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    let visited1 = Array(N + 1).fill(false);
    let visited2 = Array(N + 1).fill(false);

    let cnt = 1;

    visited1[i] = true;
    visited2[i] = true;

    dfs(i, graph, visited1);
    dfs(i, revers, visited2);

    for (let j = 1; j <= N; j++) {
      if (visited1[j] || visited2[j]) cnt++;
    }

    if (cnt === N + 1) answer++;
  }

  console.log(answer);
};

solution(input);
