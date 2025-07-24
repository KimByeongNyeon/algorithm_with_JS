function solution(my_string) {
    var answer = '';
    var arr = []
    for (var i = 0; i < my_string.length; i++) {
        if (65 <= my_string.charCodeAt(i) && my_string.charCodeAt(i) <= 90) {
            arr.push(my_string[i].toLowerCase())
        } else {
            arr.push(my_string[i].toUpperCase())
        }
    }
    
    
    return arr.join('');
}