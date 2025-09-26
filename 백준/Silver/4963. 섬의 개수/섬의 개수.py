import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

dx = [-1,-1,-1,0,0,1,1,1]
dy = [-1,0,1,-1,1,-1,0,1]

while True:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break

    arr = [list(map(int, input().split())) for _ in range(h)]
    visited = [[0] * w for _ in range(h)]

    def dfs(x, y):
        visited[x][y] = 1
        for k in range(8):
            nx, ny = x + dx[k], y + dy[k]
            if 0 <= nx < h and 0 <= ny < w:
                if not visited[nx][ny] and arr[nx][ny] == 1:
                    dfs(nx, ny)

    cnt = 0
    for i in range(h):
        for j in range(w):
            if arr[i][j] == 1 and not visited[i][j]:
                dfs(i, j)
                cnt += 1

    print(cnt)
