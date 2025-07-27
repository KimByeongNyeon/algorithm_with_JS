function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b)
    var sum = 0
    var total = budget
    console.log(d)
    for (var i = 0; i < d.length; i++) {
        if (total >= d[i]) {
            total = total - d[i]
            console.log(total)
            answer++
        }
    }
    
    return answer;
}