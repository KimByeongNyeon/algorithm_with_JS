function solution(a, b) {
    var answer = 0;
    var toStringA = `${a}` + `${b}`;
    var toStringB = `${b}` + `${a}`;
    
    var toIntA = parseInt(toStringA)
    var toIntB = parseInt(toStringB)
    answer = toIntA > toIntB ? toIntA : toIntB
    return answer;
}