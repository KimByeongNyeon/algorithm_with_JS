const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let preSum = 0;
  let answer = 0;
  for (let i = 0; i < N; i++) {
    preSum += arr[i];
    answer += preSum
  }
  console.log(answer);
};
solution(input);
