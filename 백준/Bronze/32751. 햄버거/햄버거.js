const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "dev/stdin"
      : path.join(__dirname, "input.txt"),
  )
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const ingredients = input[1].split(" ").map(Number);

  const hambuger = input[2].split("");
  obj = { a: 0, b: 0, c: 0, d: 0 };
  const keys = ["a", "b", "c", "d"];
  for (let dish of hambuger) {
    obj[dish]++;
  }
  const isHam = () => {
    if (hambuger[0] !== "a" || hambuger[N - 1] !== "a") {
      return false;
    }
    for (let i = 0; i < N - 1; i++) {
      if (hambuger[i] === hambuger[i + 1]) {
        return false;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (obj[keys[i]] > ingredients[i]) {
        return false;
      }
    }

    return true;
  };
  let flag = isHam();
  console.log(flag ? "Yes" : "No");
};
solution(input);
