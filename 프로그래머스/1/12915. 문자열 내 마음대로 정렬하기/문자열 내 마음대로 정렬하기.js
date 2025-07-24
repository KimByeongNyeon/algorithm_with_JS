function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a, b) => {
        const char1 = a[n];
        const char2 = b[n];
        
        if (char1 === char2) {
            return a.localeCompare(b)
        }
        return char1.localeCompare(char2)
    })
    return answer;
}