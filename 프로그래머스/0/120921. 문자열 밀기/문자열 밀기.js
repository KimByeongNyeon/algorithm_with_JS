function solution(A, B) {
    var arr = [...A]
    
    for (var i = 0; i < arr.length; i++) {
        if (A === B) {
            return 0
        }
        var lastChar = arr.pop();
        arr.unshift(lastChar);
        if (arr.join('') === B) {
            return i + 1
        }
    }
    return -1;
}