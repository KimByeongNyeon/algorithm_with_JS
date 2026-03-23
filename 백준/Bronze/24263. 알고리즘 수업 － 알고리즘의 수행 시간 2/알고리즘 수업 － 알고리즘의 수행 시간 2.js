const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : path.join(__dirname, "input.txt")).toString().trim().split("/n")

const solution = (input) => {
    console.log(Number(input))
    console.log(1)
}
solution(input)