function solution(s) {
    var answer = '';
    var arr = [...s]
    var str = []
    
    function counter(arr) {
        const frequency = {};
        for (const element of arr) {
            frequency[element] = (frequency[element] || 0) + 1;
        }
        return frequency
    }
    var result = counter(arr)
    console.log(result)
    
    for (const char of arr) {
        if (result[char] === 1) {
            str.push(char)
        }
    }
    
    var filtered = arr.filter(char => result[char] === 1);

    var sorted = [...new Set(filtered)].sort();
  
    return sorted.join('');
}