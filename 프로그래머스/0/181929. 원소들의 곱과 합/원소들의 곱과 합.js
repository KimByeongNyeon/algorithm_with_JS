function solution(num_list) {
    let goap = num_list.reduce((a, b) => {
        return a * b
    }, 1)
    
    let haap = num_list.reduce((a, b) => {
        return a + b
    }, 0)
    
    var answer = 0;
    
    
    answer = goap > haap ** 2 ? 0 : 1
    return answer;
}