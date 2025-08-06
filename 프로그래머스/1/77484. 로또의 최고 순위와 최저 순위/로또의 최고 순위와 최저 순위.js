function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0;
    let zero_cnt = 0;
    const obj = {
        0 : 6,
        1 : 6,
        2 : 5,
        3 : 4,
        4 : 3,
        5 : 2,
        6 : 1
    }
    for (var i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            zero_cnt++;
        }
        for (var j = 0; j < win_nums.length; j++) {
            if (lottos[i] === win_nums[j]) {
                cnt++;
            }
        }
    }
    
    let mx = obj[zero_cnt + cnt];
    let mn = obj[cnt]
    
    
    return [mx, mn];
}