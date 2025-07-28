function solution(s) {
    var answer = "";
    var nums = {
        "zero":0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight":8,
        "nine":9
        
    }
    var stack = ""
    
    for (var i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            answer += s[i]
        } else {
            stack += s[i]
            
            if (nums[stack] !== undefined) {
                answer += String(nums[stack])
                stack = ""
            }
        }
    }
    
    return parseInt(answer);
}