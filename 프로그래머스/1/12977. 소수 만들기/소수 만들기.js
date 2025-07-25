function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    var answer = 0;
    var n = nums.length;
    for (var i = 0; i < n - 2; i++) {
        for (var j = i + 1; j < n - 1; j++) {
            for (var k = j + 1; k < n; k++) {
                var sum = nums[i] + nums[j] + nums[k]
                
                if (isPrime(sum)) {
                    answer++
                }
            }
        }
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    return answer;
}