function solution(strArr) {
    var answer = 0;
    const obj = {}
    const arr = [...strArr]
    arr.forEach((value) => {
        const length = value.length;
        obj[length] = obj[length] ?? []
        obj[length].push(value)
    })
    const values = Object.values(obj).map(a => a.length)
    console.log(obj)
    console.log(values)
    answer = Math.max(...values)
    return answer;
}