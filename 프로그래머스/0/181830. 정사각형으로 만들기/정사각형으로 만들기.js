function solution(arr) {
    var answer = [[]];
    for (let i = 0; i < arr.length; i++) {
        let cnt = arr[i].length
        if(cnt > arr.length) {
            arr.push(Array(cnt).fill(0))
        } else if (arr.length > cnt){
            for (let i = 0; i < arr.length; i++){
            while (arr[i].length !== arr.length){
                arr[i].push(0)   
            }
        }
        } else {
            return arr
        }
    }
    return answer;
}