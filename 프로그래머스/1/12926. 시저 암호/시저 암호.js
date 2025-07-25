function solution(s, n) {
    var answer = '';
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i)
        
        if (65 <= ascii && ascii <= 90) {
            ascii += n
            
            if (ascii > 90) {
                ascii -= 26
            }
        } else if (97 <= ascii && ascii <= 122) {
            ascii += n
            
            if (ascii > 122) {
                ascii -= 26
            }
        }
        
        answer += String.fromCharCode(ascii)
    }
    return answer;
}