function solution(numbers) {
    let arr = numbers.map(String);
    console.log(arr)
    arr.sort((a, b) => (b + a) - (a + b));
    
    console.log(arr)
    let answer = arr.join('');

    return answer[0] === '0' ? '0' : answer;
}
