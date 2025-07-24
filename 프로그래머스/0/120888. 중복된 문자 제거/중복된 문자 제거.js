function solution(my_string) {
    var answer = '';
    var arr = [...my_string]
    var set = new Set(arr)
    return [...set].join('');
}