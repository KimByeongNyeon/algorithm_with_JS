const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : path.join(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = Number(input[0]);

  let flag = true;
  let c = Number(input[1]);

  for (let i = 2; i < N + 1; i++) {
    if (Number(input[i]) > c) {
      flag = false;
      break;
    }
  }

  console.log(flag ? "S" : "N");
};

solution(input);
