function solution(numbers) {
    var answer = -1;
    var sum = numbers.reduce((a, b) => a + b)
    
    return 45 - sum;
}