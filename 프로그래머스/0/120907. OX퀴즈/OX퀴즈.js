function solution(quiz) {
    var answer = [];
    quiz.forEach((value) => {
        const arr = value.split(' ')
        let result = 0
        const X = parseInt(arr[0])
        const Y = parseInt(arr[2])
        const num = parseInt(arr[4])
        
        if (arr[1] == "+") {
            result = X + Y
        } else if (arr[1] == "-") {
            result = X - Y
        }
        console.log(result)
        if (num == result) {
            answer.push("O")
        } else {
            answer.push("X")
        }
    })
    return answer;
}