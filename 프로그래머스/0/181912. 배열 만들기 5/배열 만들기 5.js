function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (var i = 0; i < intStrs.length; i++) {
        var strArr = [...intStrs[i]]
        var sub = strArr.slice(s, l + s)
        var num = parseInt(sub.join(''))
        
        if (num > k) {
            answer.push(num)
        }
    }
    
    return answer;
}