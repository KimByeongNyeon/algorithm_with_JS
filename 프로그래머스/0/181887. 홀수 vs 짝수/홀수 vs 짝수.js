function solution(num_list) {
    var answer = 0;
    var sumOdd = 0
    var sumAdd = 0
    const size = num_list.length
    for (var i = 0; i < size; i += 2) {
        sumOdd += num_list[i]
    }
    for (var i = 1; i < size; i += 2) {
        sumAdd += num_list[i]
    }
    
    answer = sumOdd > sumAdd ? sumOdd : sumAdd
    return answer;
}