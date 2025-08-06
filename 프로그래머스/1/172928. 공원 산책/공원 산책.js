function solution(park, routes) {
    const arr = park.map(row => row.split(''));
    const h = arr.length;
    const w = arr[0].length;
    
    let x = 0, y = 0;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (arr[i][j] === 'S') {
                x = i;
                y = j;
            }
        }
    }

    const dir = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1],
    };

    for (let route of routes) {
        const [d, nStr] = route.split(' ');
        const [dx, dy] = dir[d];
        const n = parseInt(nStr);

        let nx = x, ny = y;
        let isBlocked = false;

        for (let i = 1; i <= n; i++) {
            const tx = x + dx * i;
            const ty = y + dy * i;

            if (tx < 0 || tx >= h || ty < 0 || ty >= w || arr[tx][ty] === 'X') {
                isBlocked = true;
                break;
            }
        }

        if (!isBlocked) {
            x += dx * n;
            y += dy * n;
        }
    }

    return [x, y];
}
