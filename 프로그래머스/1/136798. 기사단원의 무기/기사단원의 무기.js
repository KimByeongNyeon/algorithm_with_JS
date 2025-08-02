function countDivisors(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += (i * i === n) ? 1 : 2; 
        }
    }
    return count;
}

function calcul(arr, limit, power) {
    var result = 0
    var newArr = arr.map((value) => value > limit ? value = power : value)
    return newArr.reduce((a, b) => a + b)
}

function solution(number, limit, power) {
    var answer = 0;
    var arr = []
    for (var i = 1; i <= number; i++) {
        arr.push(countDivisors(i))
    } 
    answer = calcul(arr, limit, power)
    return answer;
}

