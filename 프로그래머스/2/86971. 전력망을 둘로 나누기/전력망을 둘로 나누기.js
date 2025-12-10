const solution = (n, wires) => {
  var answer = Infinity;

  let tree = Array.from(Array(n + 1), () => []);

  wires.map((el) => {
    let [a, b] = el;

    tree[a].push(b);
    tree[b].push(a);
  });
  // 끊어줄 노드를 인자로 받는 bfs 함수
  const bfs = (a, b) => {
    let head = 0;
    let count = 0;
    let visited = Array.from({ length: wires.length }, () => false);
    visited[a] = true;
    let queue = [a];
    // BFS 시작
    while (queue.length > head) {
      let idx = queue[head++];
      // tree 탐색
      tree[idx].forEach((el) => {
        // 간선이 끊어져 있기 때문에 갈 수 있는 노드가 b 이거나 이미 방문했다면 건너뛰기
        if (el !== b && visited[el] !== true) {
          // 방문 처리
          visited[el] = true;
          // 다음 노드 추가
          queue.push(el);
          console.log(queue);
        }
      });

      count++;
      console.log(count);
    }
    return count;
  };

  wires.forEach((el) => {
    let [a, b] = el;
    answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
  });

  return answer;
};
