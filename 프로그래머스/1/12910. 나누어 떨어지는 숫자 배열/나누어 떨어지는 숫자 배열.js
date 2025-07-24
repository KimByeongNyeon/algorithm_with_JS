function solution(arr, divisor) {
    return arr.filter(value => value % divisor == 0).sort((a, b) => a - b).length === 0 ? [-1] : arr.filter(value => value % divisor == 0).sort((a, b) => a - b);
}