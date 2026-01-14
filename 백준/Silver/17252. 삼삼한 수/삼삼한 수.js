const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let n = Number(input[0]);
  if (n === 0) {
    console.log("NO");
    return;
  }
  while (0 < n) {
    if (n % 3 === 2) {
      console.log("NO");
      return;
    }
    n = Math.floor(n / 3);
  }
  console.log("YES");
};

solution(input);
