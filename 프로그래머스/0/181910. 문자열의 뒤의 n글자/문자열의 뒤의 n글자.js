function solution(my_string, n) {
    var answer = '';
    var size = my_string.length;
    
    answer += my_string.slice(size - n, size + 1) 
    return answer;
}