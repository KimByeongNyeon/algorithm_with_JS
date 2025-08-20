function solution(dirs) {
    var answer = 0;
    var obj = {
        "U": [0, 1],
        "D": [0, -1],
        "R": [1, 0],
        "L": [-1, 0]
    };

    let x = 0, y = 0;  // 시작점
    const visited = new Set();

    for (let dir of dirs) {
        let [dx, dy] = obj[dir];
        let nx = x + dx;
        let ny = y + dy;

        // 좌표 범위 체크 (-5 ~ 5)
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

        // 경로 기록 (양방향 동일 취급)
        let path1 = `${x},${y},${nx},${ny}`;
        console.log(path1)
        let path2 = `${nx},${ny},${x},${y}`;

        visited.add(path1);
        visited.add(path2);

        // 이동
        x = nx;
        y = ny;
    }

    // 방문한 길 개수 (양방향 저장했으니 절반)
    return visited.size / 2;
}
