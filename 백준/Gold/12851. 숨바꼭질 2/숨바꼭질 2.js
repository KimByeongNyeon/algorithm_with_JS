const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [N, K] = input[0].split(" ").map(Number);
  const MAX = 100000;

  if (N === K) {
    console.log(0);
    console.log(1);
    return;
  }

  const dist = Array(MAX + 1).fill(-1); // 방문한 시간 저장
  let queue = [N];
  dist[N] = 0;

  let cnt = 0;
  let minTime = Infinity;

  let head = 0;
  while (queue.length > head) {
    const cur = queue[head++];

    if (cur === K) {
      minTime = dist[cur];
      cnt++;
      continue;
    }

    for (const next of [cur - 1, cur + 1, cur * 2]) {
      if (next < 0 || next > MAX) continue;

      // 처음 방문
      if (dist[next] === -1) {
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
      // 이미 방문했지만 같은 최단 시간이라면 다른 경로
      else if (dist[next] === dist[cur] + 1) {
        queue.push(next);
      }
    }
  }

  console.log(minTime);
  console.log(cnt);
};

solution(input);
