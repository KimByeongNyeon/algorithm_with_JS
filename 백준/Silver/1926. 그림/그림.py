import sys
sys.setrecursionlimit(10 ** 6)

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]


visited = [[0] * M for _ in range(N)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

answer = []

def dfs(x, y) :
    cnt = 1
    visited[x][y] = 1
    for k in range(4):
        nx, ny = x + dx[k], y + dy[k]
        if 0 <= nx < N and 0 <= ny < M:
            if visited[nx][ny] == 0 and arr[nx][ny] == 1:
                cnt += dfs(nx, ny)
    return cnt

for i in range(N):
    for j in range(M):
        if visited[i][j] == 0 and arr[i][j] == 1:
            answer.append(dfs(i,j))

answer.sort()

print(len(answer))
if len(answer) == 0:
    print(0)
else:
    print(answer[-1])
