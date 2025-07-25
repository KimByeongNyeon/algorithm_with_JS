function solution(phone_number) {
    var limit_len = phone_number.length - 3;
    var change_str = phone_number.substring(0, limit_len - 1);
    var new_str = ''
    
    for (var i = 0; i < change_str.length; i++) {
        new_str += "*"
    }
    
    console.log(new_str)
    console.log(change_str)
    return phone_number.replace(change_str, new_str);
}