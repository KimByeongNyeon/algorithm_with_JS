function solution(str1, str2) {
    var answer = '';
    let total_index = str1.length + str2.length
    var answer = "";
    var car = str1.length > str2.length ? str1.length : str2.length
    for (var i = 0; i < car; i++) {
        answer += str1[i]+str2[i]
    }
    return answer;
}