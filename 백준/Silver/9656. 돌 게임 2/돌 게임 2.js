const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(process.platform === "linux" ? "dev/stdin" : fs.join(__dirname, "input.txt"))
.toString().trim().split("\n")

const solution = (input) => {
    const N = Number(input[0])
    console.log(N % 2 === 0 ? "SK" : "CY")
}
solution(input)