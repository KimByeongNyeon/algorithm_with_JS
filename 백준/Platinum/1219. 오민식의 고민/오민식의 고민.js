const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "input.txt"),
  )
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let idx = 0;
  // 변경점 1: split(" ") 대신 trim().split(/\s+/) 사용
  let [N, start, end, M] = input[idx++].trim().split(/\s+/).map(Number);
  const edge = [];
  const INF = Infinity;
  const dist = Array(N).fill(INF);
  const visited = Array(N).fill(false);
  const queue = [];

  for (let i = 0; i < M; i++) {
    // 변경점 1: split(" ") 대신 trim().split(/\s+/) 사용
    const [S, E, cost] = input[idx++].split(" ").map(Number);
    edge.push([S, E, cost]);
  }

  // 변경점 1: split(" ") 대신 trim().split(/\s+/) 사용
  const money = input[idx++].split(" ").map(Number);

  const bellman_ford = (start) => {
    dist[start] = -money[start];
    for (let i = 0; i < N - 1; i++) {
      for (const [node, next, cost] of edge) {
        if (
          dist[node] !== INF &&
          dist[next] > dist[node] + cost - money[next]
        ) {
          dist[next] = dist[node] + cost - money[next];
        }
      }
    }
    for (const [node, next, cost] of edge) {
      if (dist[node] !== INF && dist[next] > dist[node] + cost - money[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  };

  const bfs = () => {
    let head = 0;
    while (queue.length > head) {
      let now = queue[head++];
      if (now === end) {
        return true;
      }
      for (const [cur, next, _] of edge) {
        if (now === cur) {
          if (!visited[next]) {
            queue.push(next);
            visited[next] = true;
          }
        }
      }
    }
    return false;
  };

  bellman_ford(start);
  let flag = bfs();
  
  if (dist[end] === INF) {
    console.log("gg");
  } else {
    // 변경점 2: -0이 출력되는 것을 방지하기 위해 + 0 처리
    console.log(flag ? "Gee" : -dist[end] + 0);
  }
};
solution(input);