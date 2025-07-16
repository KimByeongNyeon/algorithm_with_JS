function solution(binomial) {
    var answer = 0;
    const [a, op, b] = binomial.split(' ')
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    if (op == '+') {
        answer = num1 + num2
    } else if (op == '-') {
        answer = num1 - num2
    } else if (op == '*') {
        answer = num1 * num2
    }
    return answer;
}