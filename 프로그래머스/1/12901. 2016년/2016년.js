function solution(a, b) {
    var answer = '';
    let dateStr = ''
    const dateObj = {
        0 : "SUN",
        1 : "MON",
        2 : "TUE",
        3 : "WED",
        4 : "THU",
        5 : "FRI",
        6 : "SAT"
    }
    if (a >= 10) {
        dateStr = `2016-${a}-${b}`
    } else if (a < 10) {
        dateStr = `2016-0${a}-${b}` 
    } else if (b >= 10) {
        dateStr = `2016-${a}-${b}` 
    } else {
        dateStr = `2016-${a}-0${b}`
    }
    console.log(dateStr)
    
    const dayOfWeek = new Date(dateStr).getDay();
    
    return dateObj[dayOfWeek];
}