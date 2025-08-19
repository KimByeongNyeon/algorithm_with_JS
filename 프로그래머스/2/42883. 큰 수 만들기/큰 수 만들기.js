function solution(number, k) {
    let stack = [];
    
    for (let num of number) {
        while(k > 0 && stack.length && stack[stack.length - 1] < num) {
            k--
            stack.pop()
        }
        stack.push(num)
    }
    
    stack = stack.slice(0, stack.length - k);
    
    return stack.join('');
}
