function solution(bandage, health, attacks) {
    var answer = 0;
    let [t, x, y] = bandage;
    let last = attacks[attacks.length - 1][0]
    var cnt = 0;
    var time = 0;
    var current = health;
    var attackIdx = 0;
    for(var i = 1; i <= last; i++) {
        if (attackIdx < attacks.length && i === attacks[attackIdx][0]) {
            current -= attacks[attackIdx][1];
            if (current <= 0) {
                return -1
            }
            cnt = 0
            attackIdx++;
        } else {
            current+=x
            cnt++
            if (cnt === t) {
                current += y
                cnt = 0
            }
            if (current > health) {
                current = health
            }
        }
    }
    return current;
}