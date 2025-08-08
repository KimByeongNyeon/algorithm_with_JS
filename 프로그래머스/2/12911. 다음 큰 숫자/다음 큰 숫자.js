function solution(n) {
    var answer = 0;
    var n_cnt = 0
    n.toString(2).split('').filter((value) => value === "1" ? n_cnt+=1 : n_cnt);
    
    let next = n
    let next_cnt = 0;
    while(true) {
        next++
        next.toString(2).split('').filter((value) => value === "1" ? next_cnt+=1 : next_cnt)
        if (next_cnt === n_cnt) {
            break;
        } else {
            next_cnt = 0
        }
        
    }
    return next;
}