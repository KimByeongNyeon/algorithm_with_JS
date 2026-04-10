function solution(id_list, report, k) {
    var temp = [...new Set(report)]
    var answer = [];
    const obj = {}
    const name = {}
    id_list.forEach((value) => {
        name[value] = []
    })

    for (let i = 0; i < temp.length; i++) {
        const to = temp[i].split(" ")[1]
        obj[to] = (obj[to] || 0) + 1
    }
    temp.forEach((r) => {
        const [from, to] = r.split(" ")
        if (obj[to] >= k) {
            name[from].push(to)
        }
    })
    const keys = Object.keys(name)
    for (let i = 0; i < keys.length; i++) {
        answer.push(name[keys[i]].length)
    }
    return answer;
}