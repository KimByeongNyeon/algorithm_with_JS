function solution(arr, queries) {
    var answer = [...arr];
    
    queries.forEach((query) => {
        const i = query[0];
        const j = query[1];
        
        const temp = answer[i];
        answer[i] = answer[j];
        answer[j] = temp;
    })
    
    return answer;
}