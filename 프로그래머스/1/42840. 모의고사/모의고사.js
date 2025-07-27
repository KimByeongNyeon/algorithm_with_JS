function solution(answers) {
    var answer = [];
    var one = [1, 2, 3, 4, 5]
    var two = [2, 1, 2, 3, 2, 4, 2, 5]
    var three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    var answer1 = answers.filter((value, index) => value === one[index % one.length]).length
    
    var answer2 = answers.filter((value, index) => value === two[index % two.length]).length
    
    var answer3 = answers.filter((value, index) => value === three[index % three.length]).length
    
    var mx = Math.max(answer1, answer2, answer3)
    
    if (answer1 === mx) {
        answer.push(1)
    }
    if (answer2 === mx) {
        answer.push(2)
    }
    if (answer3 === mx) {
        answer.push(3)
    }
    
    console.log(answer1)
    
    return answer;
}