function solution(my_string) {
    var answer = '';
    var newWord = my_string.toLowerCase();
    
    var arr = [...newWord];
    arr.sort()
    answer = arr.join('')
    return answer;
}