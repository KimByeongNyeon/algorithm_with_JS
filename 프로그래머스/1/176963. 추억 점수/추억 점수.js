function solution(name, yearning, photo) {
    var answer = [];
    var obj = {}
    name.forEach((value, index) => {
        obj[value] = yearning[index]
    })
    for (let i = 0; i < photo.length; i++) {
        const row = photo[i];
        const sum = row.reduce((acc, cur) => acc + (obj[cur] || 0), 0);
        answer.push(sum);
    }
    return answer;
}