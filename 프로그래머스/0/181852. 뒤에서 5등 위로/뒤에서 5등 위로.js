function solution(num_list) {
    var answer = [];
    num_list.sort((a, b) => a-b)
    console.log(num_list)
    return num_list.slice(5, num_list.length);
}