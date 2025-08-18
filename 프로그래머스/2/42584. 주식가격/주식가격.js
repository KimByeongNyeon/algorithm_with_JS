function solution(prices) {
    var answer = [];
    
    for (var i = 0; i < prices.length; i++) {
        var cnt = 0;
        for (var j = i + 1; j < prices.length; j++) {
            cnt++
            if (prices[i] > prices[j]) {
                break;
            }
        }
        answer.push(cnt)
    }
    return answer;
}