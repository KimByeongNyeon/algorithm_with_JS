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

      for (let value of tree[idx]) {
        if (value !== b && visited[value] !== true ) {
            visited[value] = true;
            queue.push(value);

        }
      }
      count++;
    }
    return count;
  };

  wires.forEach((el) => {
    let [a, b] = el;
    answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
  });

  return answer;
};
