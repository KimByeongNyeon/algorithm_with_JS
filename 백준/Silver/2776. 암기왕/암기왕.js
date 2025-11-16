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
  let idx = 0;
  const T = Number(input[idx++]);
  for (let tc = 0; tc < T; tc++) {
    const N = Number(input[idx++]);
    const arr1 = input[idx++].split(" ").map(Number);
    arr1.sort((a, b) => a - b);
    const M = Number(input[idx++]);
    const arr2 = input[idx++].split(" ").map(Number);
    const result = Array(arr2.length).fill(0);

    const bis = () => {
      for (let i = 0; i < M; i++) {
        let left = 0;
        let right = N - 1;

        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (arr2[i] === arr1[mid]) {
            result[i] = 1;
            break;
          } else if (arr2[i] > arr1[mid]) left = mid + 1;
          else right = mid - 1;
        }
      }
    };
    bis();
    console.log(result.join("\n"));
  }
};
solution(input);
