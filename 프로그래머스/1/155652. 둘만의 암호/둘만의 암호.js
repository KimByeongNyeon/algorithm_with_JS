function solution(s, skip, index) {
    var answer = '';
    for (var i = 0; i < s.length; i++) {
        let current = s[i].charCodeAt(0);
        let count = 0
        
        while (count < index) {
            current++;
            if (current > 122) {
                current = 97; 
            }

            if (!skip.includes(String.fromCharCode(current))) {
                count++;
            }
        }
        answer += String.fromCharCode(current);
    }
    return answer;
}