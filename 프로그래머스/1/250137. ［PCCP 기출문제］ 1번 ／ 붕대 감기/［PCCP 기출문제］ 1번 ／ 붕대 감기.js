function solution(bandage, health, attacks) {
    var answer = 0;
    let [t, x, y] = bandage;
    // 마지막 라운드
    let last = attacks[attacks.length - 1][0]
    // 연속 실행 횟수
    var cnt = 0;
    // 초기 체력 저장
    var current = health;
    // **중요** 반복 실행에 따라 공격한 라운드의 값을 알기 위해 저장
    var attackIdx = 0;
    for(var i = 1; i <= last; i++) {
        // 라운드가 끝나지 않았으면서 만약 공격 받을 라운드라면
        if (attackIdx < attacks.length && i === attacks[attackIdx][0]) {
            // 데미지 계산
            current -= attacks[attackIdx][1];
            // 체력이 0보다 적다면
            if (current <= 0) {
                // -1 반환
                return -1
            }
            // 연속 실행 횟수 초기화
            cnt = 0
            // 공격 라운드 갱신
            attackIdx++;
        } else {
            // 체력 회복
            current+=x
            // 연속 횟수 추가
            cnt++
            // 연속 횟수가 t 라면
            if (cnt === t) {
                // y 만큼 증가
                current += y
                // 초기화
                cnt = 0
            }
            // 최대값보다 많다면 최대체력 제한
            if (current > health) {
                current = health
            }
        }
    }
    return current;
}