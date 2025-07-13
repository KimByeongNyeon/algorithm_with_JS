function solution(my_string) {
    var answer = Array(52).fill(0);
    
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    my_string.split("").map((value) => {
        answer[alpha.indexOf(value)] += 1
    })
    return answer;
}