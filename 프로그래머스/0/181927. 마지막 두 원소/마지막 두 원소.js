function solution(num_list) {
    var answer = [...num_list];
    var last = num_list[num_list.length - 1]
    var last_two = num_list[num_list.length - 2]
    var result = 0
    result = last > last_two ? last - last_two : last * 2
    answer.push(result)
    return answer;
}