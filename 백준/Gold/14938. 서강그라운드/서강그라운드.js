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
  let result = 0;
  const [N, M, R] = input[idx++].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);
  const items = [0, ...input[idx++].split(" ").map(Number)];

  for (let i = 0; i < R; i++) {
    const [a, b, c] = input[idx++].split(" ").map(Number);
    graph[a].push({ to: b, cost: c });
    graph[b].push({ to: a, cost: c });
  }
  const dijkstra = (dist, visited) => {
    for (let i = 0; i < N; i++) {
      let now = -1;

      let min = Infinity;

      for (let j = 1; j <= N; j++) {
        if (!visited[j] && dist[j] < min) {
          min = dist[j];
          now = j;
        }
      }
      if (now === -1) break;
      visited[now] = true;

      for (const next of graph[now]) {
        const newCost = dist[now] + next.cost;

        if (newCost < dist[next.to]) {
          dist[next.to] = newCost;
        }
      }
    }
  };
  for (let i = 1; i < N + 1; i++) {
    const dist = Array(N + 1).fill(Infinity);
    const visited = Array(N + 1).fill(false);
    dist[i] = 0;
    dijkstra(dist, visited);
    let sm = 0;
    for (let j = 1; j < N + 1; j++) {
      if (dist[j] <= M) {
        sm += items[j];
      }
    }
    result = Math.max(result, sm);
  }
  console.log(result);
};

solution(input);
