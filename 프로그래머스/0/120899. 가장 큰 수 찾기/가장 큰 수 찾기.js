function solution(array) {
    var max = Math.max(...array);         
    var index = array.indexOf(max);       
    return [max, index];                  
}
