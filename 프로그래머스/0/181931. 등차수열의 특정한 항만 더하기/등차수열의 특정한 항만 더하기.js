function solution(a, d, included) {
    var arr = []
    arr[0] = a
    var answer = 0;
    for (var i = 1; i < included.length; i++) {
        arr[i] = arr[i-1] + d
    }
    
    for (var i = 0; i < included.length; i++) {
         if (included[i] === true) {
            answer += arr[i]
        }
    }
    
    return answer;
}