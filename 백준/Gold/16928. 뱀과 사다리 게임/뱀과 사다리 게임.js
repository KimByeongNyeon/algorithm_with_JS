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
  const obj = {};
  const visited = Array(101).fill(false);

  for (let i = 0; i < N + M; i++) {
    const [from, to] = input[idx++].split(" ").map(Number);
    obj[from] = to;
  }

  const bfs = () => {
    const queue = [[1, 0]];
    let head = 0;
    while (head < queue.length) {
      let [cur, depth] = queue[head++];

      if (cur === 100) {
        return depth;
      }
      for (let i = 1; i <= 6; i++) {
        let next = cur + i;
        if (next > 100) continue;
        if (obj[next]) {
          next = obj[next];
        }
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, depth + 1]);
        }
      }
    }
  };

  let answer = bfs();
  console.log(answer);
};
solution(input);
