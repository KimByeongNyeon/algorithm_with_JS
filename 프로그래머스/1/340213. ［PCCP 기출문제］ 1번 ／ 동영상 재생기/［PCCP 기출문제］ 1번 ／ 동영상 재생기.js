function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    var video_min = toMin(video_len);
    var pos_min = toMin(pos);
    var op_start_min = toMin(op_start);
    var op_end_min = toMin(op_end);
    
    if (pos_min >= op_start_min && pos_min < op_end_min) {
        pos_min = op_end_min
    }
    
    commands.forEach((value) => {
        pos_min = value === 'next' ? pos_min += 10 : pos_min -= 10;
        
        if (pos_min > video_min) {
            pos_min = video_min
        }
        if (pos_min < 0) {
            pos_min = 0
        }
        if (pos_min >= op_start_min && pos_min < op_end_min) {
            pos_min = op_end_min
        }
    })
    
    answer = toHour(pos_min)
    return answer;
}

function toMin(s) {
    const [hour, minuate] = s.split(":")
    
    return parseInt(hour) * 60 + parseInt(minuate)
}

function toHour(s) {
    const hour = String(Math.floor(s / 60)).padStart(2, "0");
    const minute = String(s % 60).padStart(2, "0");
    return `${hour}:${minute}`;
}