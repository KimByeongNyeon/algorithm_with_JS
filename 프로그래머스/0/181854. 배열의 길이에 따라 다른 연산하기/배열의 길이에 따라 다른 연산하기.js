function solution(arr, n) {
    var answer = [];
    const length = arr.length;
    if (length %2 == 0) {
        for (var i = 0; i < length; i++) {
            if (i % 2 == 1) {
                answer.push(arr[i] + n)    
            }
            else {
                answer.push(arr[i])
            }
        }
    } else {
        for (var i = 0; i < length; i++) {
            if (i % 2 == 0) {
                answer.push(arr[i] + n)    
            }
            else {
                answer.push(arr[i])
            }
            
        }
    }
    return answer;
}