function solution(myStr) {
    var answer = [];
    var temp = []
    var str = ''
    for (var i = 0; i < myStr.length; i++) {
        if (["a", "b", "c"].includes(myStr[i])) {
            temp.push(" ")
        } else {
            temp.push(myStr[i])
        }
    }
    str = temp.join('')
    answer = str.split(' ').filter((value) => value)
    return answer.length > 0 ? answer : ["EMPTY"];
}