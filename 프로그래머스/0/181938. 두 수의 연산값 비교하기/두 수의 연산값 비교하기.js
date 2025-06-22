function solution(a, b) {
    var answer = 0;
    
    var toStringA = `${a}` + `${b}`
    
    var toIntA = parseInt(toStringA)
    
    var result = (2 * a) * b
    
    answer = toIntA > result ? toIntA : result
    
    return answer;
}