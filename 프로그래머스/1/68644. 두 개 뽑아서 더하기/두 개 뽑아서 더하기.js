function solution(numbers) {
    var answer = new Set();
    function colabo (start, temp) {
        if (temp.length == 2) {
            answer.add(temp.reduce((a, b) => a + b))
            return;
        }
        
        for (var i = start; i < numbers.length; i++) {
            colabo(i + 1, [...temp, numbers[i]])
        }
    }
    colabo(0, [])
    return [...answer].sort((a, b) => a - b);
}