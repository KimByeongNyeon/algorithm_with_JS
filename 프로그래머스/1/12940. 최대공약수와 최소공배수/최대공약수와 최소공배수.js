function solution(n, m) {
    var answer = [];
    
    let gcd = 0
    let lcm = 0
    for (var i = 1; i <= Math.max(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i
        }
    }
    
    lcm = (n * m) / gcd
    answer.push (gcd, lcm)
    return answer;
}