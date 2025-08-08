function solution(players, callings) {
    const positionMap = {};
    players.forEach((name, index) => {
        positionMap[name] = index;
    });
    console.log()

    for (const name of callings) {
        let idx = positionMap[name];
        let frontplayer = players[idx - 1]
        
        players[idx - 1] = players[idx]
        players[idx] = frontplayer
        
        positionMap[name]--
        positionMap[frontplayer]++
    }

    return players;
}
