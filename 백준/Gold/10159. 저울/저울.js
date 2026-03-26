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
  const N = Number(input[idx++]);
  const M = Number(input[idx++]);

  // // 정방향 그래프
  // const graph = Array.from({ length: N + 1 }, () => []);

  // // 역방향 그래프
  // const revers = Array.from({ length: N + 1 }, () => []);

  // // 그래프 채우기
  // for (let i = 0; i < M; i++) {
  //   const [a, b] = input[idx++].split(" ").map(Number);
  //   graph[a].push(b);
  //   revers[b].push(a);
  // }
  // // dfs 탐색
  // const dfs = (x, graph, visited) => {
  //   // 다음 노드 방문 체크
  //   for (let nx of graph[x]) {
  //     // 아직 방문 안했으면
  //     if (!visited[nx]) {
  //       // 방문 후 dfs 탐색
  //       visited[nx] = true;
  //       dfs(nx, graph, visited);
  //     }
  //   }
  // };
  // // 각 노드 별로 독립적으로 탐색해야 하므로 vistied 배열을 for 문 내부에 둠
  // for (let i = 1; i <= N; i++) {
  //   const visited1 = Array.from({ length: N + 1 }, () => false);
  //   const visited2 = Array.from({ length: N + 1 }, () => false);
  //   // 현재 노드 방문 처리
  //   visited1[i] = true;
  //   visited2[i] = true;

  //   // 역방향, 정방향 그래프 dfs 탐색
  //   dfs(i, graph, visited1);
  //   dfs(i, revers, visited2);

  //   // 무게를 비교할 수 있는 물건의 수
  //   let answer = 0;
  //   // 방문체크 되어 있는 곳이 무게를 비교할 수 있는 물건의 수
  //   for (let j = 1; j <= N; j++) {
  //       // 증가
  //     if (visited1[j] || visited2[j]) answer++;
  //   }
  //   // 무게를 비교할 수 없는 물건의 개수는 전체 개수에서 비교할 수 있는 물건의 수 에서 빼주면 됨
  //   console.log(N - answer);
  // }

  const dist = Array.from({ length: N }, () => Array(N).fill(Infinity));
  for (let i = 0; i < N; i++) {
    dist[i][i] = 0;
  }

  for (let i = 0; i < M; i++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    dist[a - 1][b - 1] = 1;
  }
  let answer = Array(N).fill(0);
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    let cnt = 0;
    for (let j = 0; j < N; j++) {
      if (dist[i][j] === Infinity && dist[j][i] === Infinity) cnt++;
    }
    answer[i] = cnt;
  }
  for (let i = 0; i < N; i++) {
    console.log(answer[i]);
  }
};
solution(input);
