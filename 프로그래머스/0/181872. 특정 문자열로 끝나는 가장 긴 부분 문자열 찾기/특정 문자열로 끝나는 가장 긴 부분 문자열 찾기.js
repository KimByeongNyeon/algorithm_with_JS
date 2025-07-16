function solution(myString, pat) {
    var answer = '';
    const last = myString.lastIndexOf(pat);
    answer = myString.slice(0, last + pat.length)
    return answer;
}