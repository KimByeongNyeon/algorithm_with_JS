function solution(myString, pat) {
    var answer = 0;
    var strToLow = myString.toLowerCase();
    var patRoLow = pat.toLowerCase();
    
    answer = strToLow.includes(patRoLow) ? 1 : 0
    return answer;
}