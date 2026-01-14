const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let [N, K] = input.shift().split(" ").map(Number);
  const coins = input.map(Number).sort((a, b) => b - a);
  let cnt = 0;
  for (let coin of coins) {
    cnt += Math.floor(K / coin);
    K = K % coin;
  }

  console.log(cnt)
};
solution(input);
