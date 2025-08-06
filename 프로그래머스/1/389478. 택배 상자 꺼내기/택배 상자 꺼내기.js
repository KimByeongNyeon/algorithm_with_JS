function solution(n, w, num) {
    let boxes = Array.from({length: w}, () => []);
    var answer = 0;
    for(let i = 0; i < n; i++){
        let idx = i % w;
        if(Math.floor(i/w) % 2 == 0){ 
            boxes[idx].push(i+1);
        } else {
            boxes[w-1-idx].push(i+1);
        }
        
    }
    
    for (let j = 0; j < boxes.length; j++) {
        for (let k = 0; k < boxes[j].length; k++) {
            if (boxes[j][k] === num) {
                answer = boxes[j].length - k
            }
        }
    }
    return answer;
}