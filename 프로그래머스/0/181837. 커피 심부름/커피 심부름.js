function solution(order) {
    var answer = 0;
    var result = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (var i = 0; i < order.length; i++) {
        if (order[i].includes('latte')) {
            result.push(5000)
        } else {
            result.push(4500)
        }
    }
    answer = result.reduce(reducer)
    return answer;
}