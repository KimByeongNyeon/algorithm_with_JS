function solution(arr, queries) {
    var answer = [...arr];
    
    for (var i = 0; i < queries.length; i++) {
        let s = queries[i][0];
        let e = queries[i][1];
        let k = queries[i][2];
        
        for (var j = s; j <= e; j++) {
            if (j % k === 0) {
                answer[j] += 1
            }
        }
    }
    
    return answer;
}