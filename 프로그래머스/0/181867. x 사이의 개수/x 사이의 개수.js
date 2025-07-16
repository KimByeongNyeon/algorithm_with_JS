function solution(myString) {
    var answer = [];
    var arr = myString.split('x')
    for (var i = 0; i < arr.length; i++) {
        answer.push(arr[i].length)
    }
    return answer;
}