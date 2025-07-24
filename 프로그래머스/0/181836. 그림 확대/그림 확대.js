function solution(picture, k) {
    var answer = [];
    picture.forEach((value) => {
        let line = ''
        for (x of value) {
            line += x.repeat(k)
        }
        for (var i = 0; i < k; i++) {
            answer.push(line)
        }
    })
    return answer;
}