function solution(num, k) {
    var answer = 0;
    var arr = [...String(num)]
    for (var i = 0; i < arr.length; i++) {
        const number = parseInt(arr[i])
        if (number === k) {
            return i + 1
            break;
        }
    }
    return -1;
}