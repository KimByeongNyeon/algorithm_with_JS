function solution(num_list, n) {
    var answer = [];
    var result = []
    const size = num_list.length
    answer = num_list.slice(0, n)
    result = num_list.slice(n, size)
    result.push(...answer)
    
    return result;
}