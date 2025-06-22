const toggleMode = (mode) => (mode === 0 ? 1 : 0)


function solution(code) {
    var answer = '';
    var mode = 0;
    
    for (var i = 0; i < code.length; i++) {
        if (code[i] === "1") {
            mode = toggleMode(mode)
            continue;
        } if ((mode === 0 && i % 2 == 0) || (mode === 1 && i % 2 != 0)) {
            answer += code[i]
        }
    }
    if (answer == "") {
        answer = "EMPTY"
    }
    return answer;
}