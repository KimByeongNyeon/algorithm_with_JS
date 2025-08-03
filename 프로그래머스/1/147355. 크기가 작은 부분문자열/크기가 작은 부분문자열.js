function solution(t, p) {
    var answer = 0;
    var size = p.length
    var arr = []
    for (var i = 0; i < t.length; i++) {
        const newArr = t.slice(i, i + size)
        if (newArr.length == p.length) {
            arr.push(newArr)
        }
    }
    
    return arr.filter((value) => parseInt(value) <= parseInt(p)).length;
}