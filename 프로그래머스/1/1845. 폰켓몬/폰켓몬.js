function solution(nums) {
    var answer = 0;
    var N = nums.length;
    var set = new Set(nums);
    var size = set.size;
    console.log(N)
    console.log(size)
    if ((N / 2) < size) {
        return N / 2
    } else {
        return size
    }
    return answer;
}