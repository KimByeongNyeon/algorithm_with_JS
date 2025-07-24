function solution(array) {
    var answer = 0;
    for (var i = 0; i < array.length; i++) {
        
        var newArr = String(array[i]).split('')
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] === '7') {
                answer++
            }
        }
    }
    return answer;
}