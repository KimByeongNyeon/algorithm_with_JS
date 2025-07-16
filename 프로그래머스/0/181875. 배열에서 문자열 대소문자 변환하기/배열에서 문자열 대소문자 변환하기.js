function solution(strArr) {
    var answer = [];
    strArr.forEach((value, index) => {
        answer.push(index % 2 == 0 ? value.toLowerCase() : value.toUpperCase())
    })
    return answer;
}