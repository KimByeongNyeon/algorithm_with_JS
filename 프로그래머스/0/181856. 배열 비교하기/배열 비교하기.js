function solution(arr1, arr2) {
    var answer = 0;
    const length1 = arr1.length;
    const length2 = arr2.length;
    const sumTotal = 0;
    const sumTotal2 = 0
    if (length1 == length2) {
        const sum1 = arr1.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          sumTotal,
        );
        const sum2 = arr2.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            sumTotal2
        )
        if (sum1 == sum2) {
            answer = 0
        } else if (sum1 > sum2) {
            answer = 1
        } else {
            answer = -1
        }
        
    }else {
        if (length1 > length2) {
            answer = 1
        } else {
            answer = -1 
        }
    }
    return answer;
}