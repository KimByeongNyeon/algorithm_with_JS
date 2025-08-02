function solution(s) {
    var answer = 0;
    var stack = []
    
    for (var i = 0; i < s.length; i++) {
        stack.push(s[i])
        
        const same = stack.filter((value) => value === stack[0])
        const diff = stack.filter((value) => value !== stack[0])
        
        if (same.length === diff.length) {
            answer += 1
            stack = []
        }
    }
    
    if (stack.length !== 0) {
        answer += 1
    }
    return answer;
}