function solution(players, callings) {
    const positionMap = {};
    players.forEach((name, index) => {
        positionMap[name] = index;
    });

    for (const name of callings) {
        const idx = positionMap[name];
        const frontPlayer = players[idx - 1];

        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

        positionMap[name]--;
        positionMap[frontPlayer]++;
    }

    return players;
}
