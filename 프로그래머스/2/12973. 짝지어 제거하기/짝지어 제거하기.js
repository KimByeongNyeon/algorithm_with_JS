function solution(s){
    var answer = -1;
    var stack = []
    for (var i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) {
                stack.pop();
        }else {
            stack.push(s[i])
        }
    }
    
    return answer = stack.length === 0 ? 1 : 0;
}