function solution(number) {
    var answer = 0;
    
    var str = number.toString()
    
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
    }
    
    answer = sum % 9
    return answer;
}