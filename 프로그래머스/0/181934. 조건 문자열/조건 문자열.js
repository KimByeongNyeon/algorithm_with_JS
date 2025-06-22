function solution(ineq, eq, n, m) {
    const calcul = {
        ">=" : ">=",
        "<=" : "<=",
        ">!" : ">",
        "<!" : "<",
    }
    const calSum = ineq+eq
    const cal = calcul[calSum];

    
    var answer = 0;
    answer = eval(n +cal+ m) ? 1 : 0
    return answer;
}