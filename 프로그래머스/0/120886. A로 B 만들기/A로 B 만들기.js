function solution(before, after) {
    var answer = 0;
    var beArr = [...before]
    var afArr = [...after]
    
    
    return beArr.sort().join('') === afArr.sort().join('') ? 1 : 0;
}