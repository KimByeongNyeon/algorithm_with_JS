function solution(s){
    var answer = true;

    let pCount = 0;
    let yCount = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() === 'P') {
            pCount++
        } else if (s[i].toUpperCase() === 'Y') {
            yCount++
        }
    }

    return (pCount === yCount) || (pCount === 0 && yCount === 0) ? true : false;
}