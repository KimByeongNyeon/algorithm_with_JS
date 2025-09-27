import sys
sys.setrecursionlimit(10 ** 6)

N, M = map(int, input().split())
arr = [list(input().strip()) for _ in range(N)]


visited = [[0] * M for _ in range(N)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

answer = []

def dfs(x, y):
    cnt = 0
    visited[x][y] = 1
    for k in range(4):
        nx, ny = x + dx[k], y + dy[k]
        if 0 <= nx < N and 0 <= ny < M:
            if visited[nx][ny] == 0 and arr[nx][ny] != "X":
                if arr[nx][ny] == "P":
                    cnt += 1
                cnt += dfs(nx, ny)
    return cnt

sx, sy = 0, 0
for i in range(N):
    for j in range(M):
        if arr[i][j] == "I":
            sx, sy = i, j

result = dfs(sx, sy)

if result == 0:
    print("TT")
else:
    print(result)