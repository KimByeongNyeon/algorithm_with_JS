function solution(X, Y) {
    var answer = '';
    var arr1 = X.split('')
    var arr2 = Y.split('')
    
    for (var i = 0; i < 10; i++) {
        var x_fil = arr1.filter((value) => parseInt(value) === i).length;
        var y_fil = arr2.filter((value) => parseInt(value) === i).length;
        
        answer += i.toString().repeat(Math.min(x_fil, y_fil))
    }
    if (answer.length === 0) {
        answer = "-1"
    } else if(answer.split('').filter((value) => value === "0").length === answer.length) {
        answer = "0"
    } else {
        answer = answer.split('').reverse().join('')
    }
    
    return answer;
}