function solution(my_strings, parts) {
    var answer = '';
    
    for (var i = 0; i < my_strings.length; i++) {
        for (var j = 0; j < parts.length; j++) {
            var[s, e] = parts[i];
            var sub = my_strings[i].slice(s, e + 1)
        }
        answer += sub
    }
    
    return answer;
}