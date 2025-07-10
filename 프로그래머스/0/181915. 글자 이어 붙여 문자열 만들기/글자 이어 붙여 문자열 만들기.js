function solution(my_string, index_list) {
    var answer = '';
    var str_arr = [...my_string]
    var result_list = []
    
    for (var i = 0; i < index_list.length; i++) {
        result_list.push(str_arr[index_list[i]])
    }
    answer = result_list.join('')
    return answer;
}