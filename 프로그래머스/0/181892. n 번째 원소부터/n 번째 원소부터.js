function solution(num_list, n) {
    var answer = [];
    console.log(num_list)
    var size = num_list.length
    answer = num_list.slice(n - 1, size)
    return answer;
}