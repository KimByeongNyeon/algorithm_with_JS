const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = "";

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    for (var i = 0; i < input.length; i++) {
        if (input[i] == input[i].toLowerCase()) {
            output += input[i].toUpperCase();
        }
        if (input[i] == input[i].toUpperCase()) {
            output += input[i].toLowerCase();
        }
    }
    console.log(output)
});