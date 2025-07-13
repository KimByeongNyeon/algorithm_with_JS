function solution(my_string, s, e) {
    var answer = '';
    var strArr = []
    var pureStr = ''
    var reverseStr = ''
    
    
    for (var i = s; i <= e; i++) {
        strArr.push(my_string[i])
    }
    
    pureStr = strArr.join('')
    
    strArr.reverse()
    
    reverseStr = strArr.join('')
    console.log(pureStr)
    
    answer = my_string.replace(pureStr, reverseStr)

    console.log(answer)
    
    
    console.log(strArr)
    return answer;
}