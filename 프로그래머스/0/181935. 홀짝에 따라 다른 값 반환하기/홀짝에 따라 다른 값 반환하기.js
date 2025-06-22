function solution(n) {
    var answer = 0;
    
    for (var i = 0; i <= n; i++) {
        if (n % 2 != 0) {
            if (i % 2 != 0) {
                answer += i;
            }
        } else {
            if (i % 2 == 0) {
                answer += i ** 2
            }
        }
    }
    
    return answer;
}