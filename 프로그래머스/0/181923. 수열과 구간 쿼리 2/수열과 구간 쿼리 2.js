function solution(arr, queries) {
    var answer = [];
    
    for (var i = 0; i < queries.length; i++) {
        let s = queries[i][0];
        let e = queries[i][1];
        let k = queries[i][2];
        
        let min = 1000001;
        
        var buckes = [];
         for(var j=s; j<=e; j++) {
                if(arr[j]>k && arr[j]<min) {
                        min = arr[j];
                }
            }
        if (min != 1000001) {
            answer.push(min)
        }else {
            answer.push(-1)
        }
    }
    
    return answer;
}