function solution(n) {
    var zegopgeun = n ** 0.5
    var answer = zegopgeun % 1 === 0 ? (zegopgeun += 1) ** 2 : -1; 
    return answer;
}