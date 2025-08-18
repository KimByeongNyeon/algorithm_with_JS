function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => b - a);
    
    for (var i = 0; i < citations.length; i++) {
        if (citations[i] > i) {
            answer = i + 1;
        } else {
            break;
        }
    }
    return answer
}