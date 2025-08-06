function solution(wallpaper) {
    
    var x_arr = [];
    var y_arr = [];
    for (var i = 0; i < wallpaper.length; i++) {
        for (var j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === "#") {
                x_arr.push(j);
                y_arr.push(i);
            }
        }
    }
    var answer = [Math.min(...y_arr),Math.min(...x_arr),Math.max(...y_arr)+1,Math.max(...x_arr)+1];
    return answer;
}