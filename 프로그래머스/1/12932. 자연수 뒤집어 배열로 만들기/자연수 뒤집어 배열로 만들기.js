function solution(n) {
    var str = String(n)
    var arr = [...str]
    var result = []
    for (var i = 0; i < arr.length; i++) {
        result.push(parseInt(arr[i]))
    }
    
    return result.reverse();
}