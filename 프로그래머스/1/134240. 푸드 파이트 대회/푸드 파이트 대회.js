function solution(food) {
    var answer = [0];
    var len = food.length;
    
    for (var i = len - 1; i >= 0; i--) {
        var cnt = Math.floor(food[i] / 2)
        for (var j = 0; j < cnt; j++) {
            answer.push(i)
            answer.unshift(i)
        }
    }

    return answer.join('');
}