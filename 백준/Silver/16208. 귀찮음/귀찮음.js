const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : path.join(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let idx = 0;
  let N = Number(input[idx++]);
  const arr = input[idx++].split(" ").map(Number);
  let answer = 0;
  while (true) {
    if (N === 1) {
      break;
    }
    arr.sort((a, b) => a - b);
    let a1 = arr.shift();
    let a2 = arr.shift();

    let sm = a1 + a2;
    let cost = a1 * a2;
    answer += cost;
    arr.push(sm);
    N--;
  }
  console.log(answer);
};
solution(input);
