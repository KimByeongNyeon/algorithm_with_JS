function solution(a, b, c) {
    var setSize = new Set([a, b, c]).size
    
    var answer = 0;
    
    switch (setSize) {
        case 1 : answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
            break;
        case 2: 
            answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
            break
        case 3 :
            answer = a + b + c
            break
    }
    return answer;
    
    
}