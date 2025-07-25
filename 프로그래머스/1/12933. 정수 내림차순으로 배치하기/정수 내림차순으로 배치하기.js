function solution(n) {
    var answer = 0;
    var arr = [...String(n)]
    var result = []
    for (var i = 0; i < arr.length; i++) {
        result.push(parseInt(arr[i]))
    }
    
    result = result.sort((a, b) => a - b).reverse()
    answer = parseInt(result.map((value) => String(value)).join(''))

    return answer;
}