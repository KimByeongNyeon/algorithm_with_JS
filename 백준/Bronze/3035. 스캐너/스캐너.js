const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : path.join(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [R, C, ZR, ZC] = input[0].split(" ").map(Number);

  for (let i = 1; i <= R; i++) {
    const str = input[i];
    let answer = "";
    for (let j = 0; j < C; j++) {
      answer += str[j].repeat(ZC);
    }
    for (let j = 0; j < ZR; j++) {
      console.log(answer);
    }
  }
};

solution(input);
