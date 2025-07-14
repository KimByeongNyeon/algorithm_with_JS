function solution(arr) {
    var answer = [];
    var idxArr = []
    arr.forEach((value, index) => {
        if (value === 2) {
            idxArr.push(index)
        }
    })
    
    if (idxArr.length == 0) {
        return [-1]
    }
    
    var end = idxArr[idxArr.length - 1]
    
    answer = arr.slice(idxArr[0], end + 1)
    console.log(idxArr)
    return answer;
}