const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "input.txt"),
  )
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const str = input[0];

  let jCnt = 0;
  let iCnt = 0;
  for (let i = 0; i < str.length - 2; i++) {
    let current = "";
    for (let j = i; j < i + 3; j++) {
      current += str[j];
    }
    if (current === "JOI") jCnt++;
    else if (current === "IOI") iCnt++;
  }
  console.log(jCnt);
  console.log(iCnt);
};
solution(input);
