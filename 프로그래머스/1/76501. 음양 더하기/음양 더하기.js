function solution(absolutes, signs) {
    for (var i = 0; i < absolutes.length; i++) {
        if (!signs[i]) {
            absolutes[i] = absolutes[i] * -1
        }
    }
    
    return absolutes.reduce((a, b) => a + b);
}