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

const solution = (input) => {
  let idx = 0;
  const [N, M] = input[idx++].split(" ").map(Number);
  const edge = [];
  for (let _ = 0; _ < M; _++) {
    let [cur, next, cost] = input[idx++].split(" ").map(Number);
    edge.push([cur, next, -cost]);
  }
  const dist = Array(N + 1).fill(Infinity);
  const queue = [];
  const visited = Array(N + 1).fill(false);
  const parent = Array(N + 1).fill(-1);

  const bellman_ford = (start) => {
    dist[start] = 0;
    for (let i = 0; i < N - 1; i++) {
      for ([cur, next, cost] of edge) {
        if (dist[cur] !== Infinity && dist[next] > dist[cur] + cost) {
          dist[next] = dist[cur] + cost;
          parent[next] = cur;
        }
      }
    }
    for ([cur, next, cost] of edge) {
      if (dist[cur] !== Infinity && dist[next] > dist[cur] + cost) {
        queue.push(next);
        visited[next] = true;
      }
    }
  };

  const bfs = () => {
    let head = 0;
    while (queue.length > head) {
      const now = queue[head++];
      if (now === N) {
        return true;
      }
      for ([cur, next, _] of edge) {
        if (cur === now) {
          if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
          }
        }
      }
    }
    return false;
  };
  bellman_ford(1);
  let flag = bfs();
  if (flag) {
    console.log(-1);
  } else {
    const path = [];
    let cur = N;
    while (cur !== -1) {
      path.push(cur);
      cur = parent[cur];
    }
    console.log(path.reverse().join(" "));
  }
};
solution(input);
