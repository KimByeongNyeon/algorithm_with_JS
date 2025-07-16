function solution(myString, pat) {
    var answer = 0;
    var temp = ''
    for (var i = 0; i < myString.length; i++) {
        if (myString[i] == "A") {
            temp += "B"
        } else {
            temp += "A"
        }
    }
    console.log(temp)
    
    answer = temp.includes(pat) ? 1 : 0
    return answer;
}