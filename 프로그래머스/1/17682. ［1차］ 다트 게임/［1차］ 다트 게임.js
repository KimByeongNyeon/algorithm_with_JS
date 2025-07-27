function solution(dartResult) {
    var stack = [];
    var answer = 0;
    var arr = dartResult.split('');
    
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            if (arr[i] === '1' && arr[i + 1] === '0') {
                answer = 10;
                i++;
            } else {
                answer = Number(arr[i]);
            }
        } else if (arr[i] === 'S') {
            stack.push(answer ** 1);
        } else if (arr[i] === 'D') {
            stack.push(answer ** 2);
        } else if (arr[i] === 'T') {
            stack.push(answer ** 3);
        } else if (arr[i] === '#') {
            stack[stack.length - 1] *= -1;
        } else if (arr[i] === '*') {
            if (stack.length >= 2) stack[stack.length - 2] *= 2;
            stack[stack.length - 1] *= 2;
        }
    }
    console.log(stack)

    return stack.reduce((a, b) => a + b);
}
