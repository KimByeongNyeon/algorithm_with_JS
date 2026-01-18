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

  const T = Number(input[idx++]); // 테스트 케이스 수

  for (let tc = 0; tc < T; tc++) {
    const [N, M] = input[idx++].split(" ").map(Number);

    const visited = Array.from({ length: N + 1 }, () => 0);
    const graph = Array.from({ length: N + 1 }, () => []);
    let flag = false;

    for (let i = 0; i < M; i++) {
      const [a, b] = input[idx++].split(" ").map(Number);
      graph[a].push(b);
      graph[b].push(a);
    }

    const bfs = (node) => {
      let head = 0;
      let queue = [node];
      visited[node] = 1;
      while (head < queue.length) {
        let x = queue[head++];

        for (let nx of graph[x]) {
          if (visited[nx] === 0) {
            visited[nx] = visited[x] * -1;
            queue.push(nx);
          } else {
            if (visited[x] === visited[nx]) {
              return false;
            }
          }
        }
      }
      return true;
    };

    // const dfs = (node) => {
    //   for (let nx of graph[node]) {
    //     if (visited[nx] === 0) {
    //       visited[nx] = visited[node] * -1;
    //       if (!dfs(nx)) return false;
    //     } else {
    //       if (visited[nx] === visited[node]) {
    //         return false;
    //       }
    //     }
    //   }
    //   return true;
    // };

    for (let i = 1; i < graph.length + 1; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        flag = bfs(i);
        if (!flag) break;
      }
    }

    console.log(flag ? "YES" : "NO");
  }
};
solution(input);
