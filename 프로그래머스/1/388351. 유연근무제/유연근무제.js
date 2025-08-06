function solution(schedules, timelogs, startday) {
    var answer = 0;
    for (var i = 0; i < schedules.length; i++) {
        let goal = schedules[i] + 10;
        if (goal % 100 >= 60) {
            goal += 100
            goal -= 60;
        }
        let cnt = 0;
        for (var j = 0; j < 7; j++) {
            let day = (startday + j) % 7
            if (day === 0 || day === 6) {
                continue
            } if (timelogs[i][j] > goal) {
                break;
            }
            cnt++
            if (cnt === 5) {
            answer++
        }
        }
        
        
    }

    return answer;
}