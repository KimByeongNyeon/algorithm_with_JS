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
  const T = Number(input[idx++]);
  for (let tc = 0; tc < T; tc++) {
    const parent = [];
    const size = [];
    const map = new Map();
    const find = (x) => {
      if (parent[x] !== x) {
        parent[x] = find(parent[x]);
      }
      return parent[x];
    };
    const union = (a, b) => {
      let a1 = find(a);
      let b1 = find(b);

      if (a1 === b1) return size[a1];
      if (size[a1] < size[b1]) {
        [a1, b1] = [b1, a1];
      }
      parent[b1] = a1;
      size[a1] += size[b1];

      return size[a1];
    };
    const getIndex = (name) => {
      if (!map.has(name)) {
        const idx = map.size;
        map.set(name, idx);
        parent[idx] = idx;
        size[idx] = 1;
      }
      return map.get(name);
    };
    const F = Number(input[idx++]);
    for (let i = 0; i < F; i++) {
      const [a, b] = input[idx++].split(" ");
      const ai = getIndex(a);
      const bi = getIndex(b);
      console.log(union(ai, bi));
    }
  }
};
solution(input);
