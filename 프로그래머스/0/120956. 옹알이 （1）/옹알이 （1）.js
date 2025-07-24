function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;
    
    babbling.forEach((value) => {
        if (regex.test(value)) {
            answer++
        }
    })
    return answer;
}