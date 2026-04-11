function solution(friends, gifts) {
    var answer = Array.from({length: friends.length}, () => 0);
    const arr = Array.from({length: friends.length}, () => Array(friends.length).fill(0))
    
    const giftScore = Array.from({length: friends.length}, () => 0)
    const map = {};
    friends.forEach((name, idx) => map[name] = idx)
    gifts.forEach((value) => {
        const [give, take] = value.split(" ")
        let giveIdx = map[give]
        let takeIdx = map[take]
        giftScore[giveIdx]++
        giftScore[takeIdx]--
        
        arr[giveIdx][takeIdx]++
    })
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            if (arr[i][j] > arr[j][i]) {
                answer[i]++
            } else if (arr[j][i] > arr[i][j]) {
                answer[j]++
            }else {
                if (giftScore[i] > giftScore[j]) {
                    answer[i]++
                } else if (giftScore[j] > giftScore[i]) {
                    answer[j]++
                }
            }
        }
    }
    return Math.max(...answer);
}