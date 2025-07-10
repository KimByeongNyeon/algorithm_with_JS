function solution(arr) {
    var stk = [];
    var i = 0
    while(i < arr.length) {
        var size = stk.length;

        if (size == 0) {
            stk.push(arr[i]);
            i++
        }
        else if (size > 0 && stk[size - 1] < arr[i]) {
            stk.push(arr[i]);
            i++
        }
        else if (size > 0 && stk[size - 1] >= arr[i]) {
            stk.pop()
        }
        
    }
    
    
    return stk;
}