function solution(order) {
    var arr = [...String(order)]
    var answer = 0;
    for (const digit of arr) {
        if (digit === "3" || digit === "6" || digit === "9") {
            answer++
        }
    }
    return answer;
}