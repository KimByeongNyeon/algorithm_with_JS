function solution(number) {
    var answer = 0;
    function collabo(start, temp) {
       if (temp.length === 3) {
            const sum = temp.reduce((a, b) => a + b, 0);
            if (sum === 0) answer++;
            return;
        }
        
        for (var i = start; i < number.length; i++) {
            collabo(i + 1, [...temp, number[i]])
        }
    }
    collabo(0, [])
    return answer;
}