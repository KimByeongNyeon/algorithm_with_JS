const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "input.txt")
  )
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  arr.sort((a, b) => a - b);

  const tp = () => {
    let mn = Infinity;
    let result = [];

    for (let i = 0; i < N - 2; i++) {
      let start = i + 1;
      let end = N - 1;
      while (start < end) {
        let sm = arr[i] + arr[start] + arr[end];
        if (Math.abs(sm) < mn) {
          mn = Math.abs(sm);
          result = [arr[i], arr[start], arr[end]];
        }
        if (sm < 0) {
          start++;
        } else {
          end--;
        }
      }
    }
    return result;
  };
  let result = tp();
  console.log(result.join(" "));
};
solution(input);
