function solution(n) {
    var answer = [];
    
    while (true) {
        answer.push(n)
        switch (n % 2) {
            case 0 :
                n = n / 2
                break;
            case 1 :
                n = n * 3 + 1
                break;
        }
        if (n == 1) {
            answer.push(n)
            break;
        }
    }
    return answer;
}