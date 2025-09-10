function solution(cacheSize, cities) {
    var answer = 0;
    let queue = []
    
    if (cacheSize === 0) return answer = cities.length * 5
    for (let city of cities) {
        city = city.toLowerCase();
                
        let idx = queue.indexOf(city)
        
        if (idx !== -1) {
            queue.splice(idx, 1)
            queue.push(city)
            answer += 1
        } else {
            if (queue.length === cacheSize) {
                queue.shift()
            }
            queue.push(city)
            answer += 5
        }
    }
    return answer;
}