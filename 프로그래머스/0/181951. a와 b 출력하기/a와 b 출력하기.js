const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
const output = ["a",'b']

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (var i = 0; i < input.length; i++) {
        console.log(output[i], "=", input[i]);
    }
});