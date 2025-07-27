function solution(participant, completion) {
    var answer = '';
    var counts = {}
    
    participant.forEach((name) => {
        counts[name] = (counts[name] || 0) + 1;
    })
    
    completion.forEach((name) => {
        counts[name] -= 1
    })
    for (const name in counts) {
        if (counts[name] > 0) {
            return name
        }
    }
    
    return answer;
}