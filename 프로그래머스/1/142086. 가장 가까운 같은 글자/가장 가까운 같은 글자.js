function solution(s) {
    var answer = [];
    var stack = []
    
    for (var i = 0; i < s.length; i++) {
        if(!stack.includes(s[i])) {
            answer.push(-1)
            stack.push(s[i])
        } else {
            const len = stack.length;
            const last = stack.lastIndexOf(s[i])
            answer.push(len - last)
            stack.push(s[i])   
        }
    }
    return answer;
}