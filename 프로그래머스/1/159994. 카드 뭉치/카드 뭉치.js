function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    var c1 = 0;
    var c2 = 0;
    for (var i = 0; i < goal.length; i++) {
        if (cards1[c1] === goal[i]) {
            c1++
        } else if (cards2[c2] === goal[i]) {
            c2++
        } else {
            return "No"
        }
    }
    return answer;
}