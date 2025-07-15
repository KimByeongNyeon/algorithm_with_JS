function solution(arr, queries) {
    var answer = [...arr];
    for (var i = 0; i < queries.length; i++) {
        let [s, e] = queries[i]
        for (var j = s; j <= e; j++) {
            answer[j] += 1
        }
    }
    
    
    return answer;
}