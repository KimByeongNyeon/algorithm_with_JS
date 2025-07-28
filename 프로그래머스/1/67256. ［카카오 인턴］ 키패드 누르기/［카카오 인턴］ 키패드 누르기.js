function solution(numbers, hand) {
    const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*' : [3, 0], 0 : [3, 1], "#" : [3, 2]
    }
    var answer = '';
    var right = keyPad["#"]
    var left = keyPad["*"]
    for (let num of numbers) {
        const pos = keyPad[num]
        
        if([1, 4, 7].includes(num)) {
            answer += 'L';
            left = pos
        } else if ([3, 6, 9].includes(num)) {
            answer += 'R'
            right = pos
        } else {
            const ldiff = Math.abs(left[0] - pos[0]) + Math.abs(left[1] - pos[1])
            const rdiff = Math.abs(right[0] - pos[0]) + Math.abs(right[1] - pos[1])
            
            if (ldiff < rdiff) {
                answer += 'L';
                left = pos
            } else if(rdiff < ldiff) {
                answer += 'R';
                right = pos
            } else {
                if (hand === 'right') {
                    answer += 'R';
                    right = pos
                } else {
                    answer += 'L';
                    left = pos
                }
            }
        }
    }
    return answer;
}