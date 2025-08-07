function solution(keymap, targets) {
    var answer = [];
    var minObj = {}
    keymap.forEach((value) => {
        for (var i = 0; i < value.length; i++) {
            const press = i + 1;
            const char = value[i];
            if (!minObj[char] || minObj[char] > press) {
                minObj[char] = press
            }
        }
    })
    console.log(minObj)
    for (let target of targets) {
        let total = 0;
        var isValid = false;
        for (let char of target) {
            if (char in minObj) {
                total += minObj[char]
            }else {
                isValid = true;
                break;
            }
        }
        answer.push(isValid ? -1 : total)
    }
    
    return answer;
}