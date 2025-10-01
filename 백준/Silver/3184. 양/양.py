import sys
sys.setrecursionlimit(10 ** 6)

N, M = map(int, input().split())

arr = [list(input().strip()) for _ in range(N)]

visited = [[0] * M for _ in range(N)]

yang = 0
wolf = 0

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y):
    y_cnt = 1 if arr[x][y] == 'o' else 0
    w_cnt = 1 if arr[x][y] == 'v' else 0
    visited[x][y] = 1
    
    for k in range(4):
        nx, ny = x + dx[k], y + dy[k]
        
        if 0 <= nx < N and 0 <= ny < M:
            if visited[nx][ny] == 0 and arr[nx][ny] != '#':
                ny_cnt, nw_cnt = dfs(nx, ny)
                y_cnt += ny_cnt
                w_cnt += nw_cnt
    
    return y_cnt, w_cnt


for i in range(N):
    for j in range(M):
        if visited[i][j] == 0 and arr[i][j] != '#':
            y_cnt, w_cnt = dfs(i, j)
            if y_cnt > w_cnt:
                yang += y_cnt
            else:
                wolf += w_cnt

print(yang, wolf)