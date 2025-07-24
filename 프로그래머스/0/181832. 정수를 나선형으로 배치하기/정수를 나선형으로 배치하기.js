function solution(n) {
    // n x n 크기의 2차원 배열 초기화
    let answer = Array.from({ length: n }, () => Array(n).fill(0));

    const dx = [0, 1, 0, -1]; // 우, 하, 좌, 상
    const dy = [1, 0, -1, 0];

    let x = 0, y = 0, direction = 0;

    for (let i = 1; i <= n * n; i++) {
        answer[x][y] = i;

        let nx = x + dx[direction];
        let ny = y + dy[direction];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n || answer[nx][ny] !== 0) {
            direction = (direction + 1) % 4;
            nx = x + dx[direction];
            ny = y + dy[direction];
        }

        x = nx;
        y = ny;
    }

    return answer;
}
