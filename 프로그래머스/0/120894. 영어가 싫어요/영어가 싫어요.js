function solution(numbers) {
    const arr = [...numbers]
    const freq = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    }
    
    let temp = numbers;
    for (let word in freq) {
        const digit = freq[word];
        temp = temp.split(word).join(digit);
        console.log(temp)
    }

    return Number(temp);
}