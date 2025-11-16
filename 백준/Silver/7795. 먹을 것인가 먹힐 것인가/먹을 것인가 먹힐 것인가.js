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
    const [N, M] = input[idx++].split(" ").map(Number);
    const arr1 = input[idx++].split(" ").map(Number);
    const arr2 = input[idx++].split(" ").map(Number);
    arr2.sort((a, b) => a - b);
    let count = 0;

    const bis = () => {
      let count = 0;
      for (let num of arr1) {
        let left = 0;
        let right = arr2.length;

        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (arr2[mid] <= num - 1) {
            left = mid + 1;
          } else right = mid - 1;
        }
        count += left;
      }
      return count;
    };
    count = bis();
    console.log(count);
  }
};
solution(input);
