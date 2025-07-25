function solution(s) {
    var arr = s.split(' ')
    for (var i = 0; i < arr.length; i++) {
        var word = ''
        for (var j = 0; j < arr[i].length; j++) {
            if (j % 2 == 0) {
                word += arr[i][j].toUpperCase()
            } else {
                word += arr[i][j].toLowerCase()
            }
        }
        
        arr[i] = word
    }
    return arr.join(' ');
}