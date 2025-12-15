const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "dev/stdin"
      : path.join(__dirname, "input.txt")
  )
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [a, b, c, N] = input[0].split(" ").map(Number);
  let result = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      for (let k = 0; k < c; k++) {
        if (i * a + j * b + (k + c) === N) {
          result = 1;
        }
      }
    }
  }
  console.log(result);
};
solution(input);
