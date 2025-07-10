function solution(my_string, queries) {
    var answer = '';
    var arr = [...my_string]
    
    for (var i = 0; i < queries.length; i++) {
        s = queries[i][0]
        e = queries[i][1]
        
        var target = arr.slice(s, e + 1)
        
        target.reverse()
        
        for (let j = s; j <= e; j++) {
            arr[j] = target[j - s]
        }
        
    }
    return answer = arr.join('');
}