function solution(myString) {
    var answer = '';
    for (var i = 0; i < myString.length; i++) {
        if (myString[i].toLowerCase() === 'a') {
            answer += 'A';
        } else {
            answer += myString[i].toLowerCase();
        }
    }
    return answer;
}