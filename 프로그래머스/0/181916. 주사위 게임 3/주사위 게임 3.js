function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const freq = {};
    arr.forEach(n => freq[n] = (freq[n] || 0) + 1);
    
    console.log(freq)

    const nums = Object.keys(freq).map(Number);
    const counts = Object.values(freq);
    const size = nums.length;

    switch (size) {
        case 1:
            return 1111 * nums[0];
        case 2:
            if (counts.includes(3)) {
                const p = nums.find(n => freq[n] === 3);
                const q = nums.find(n => freq[n] === 1);
                return (10 * p + q) ** 2;
            } else {
                return (nums[0] + nums[1]) * Math.abs(nums[0] - nums[1]);
            }
        case 3:
            const p = nums.find(n => freq[n] === 2);
            const others = nums.filter(n => freq[n] === 1);
            return others[0] * others[1];
        case 4:
            return Math.min(...nums);
    }
}
