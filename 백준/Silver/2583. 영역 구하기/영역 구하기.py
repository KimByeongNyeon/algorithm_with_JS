import sys
sys.setrecursionlimit(10 ** 6)

M, N, K = map(int, input().split())

visited = [[0] * N for _ in range(M)]

arr = [[0] * N for _ in range(M)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for _ in range(K):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(y1, y2):
        for j in range(x1, x2):
            arr[i][j] = 1
            
def dfs(x, y):
    visited[x][y] = 1
    area = 1
    for k in range(4):
        nx, ny = x + dx[k], y + dy[k]
        if 0 <= nx < M and 0 <= ny < N:
            if visited[nx][ny] == 0 and arr[nx][ny] == 0:
                area += dfs(nx, ny)
    return area
                
areas = []
        
for i in range(M):
    for j in range(N):
        if visited[i][j] == 0 and arr[i][j] == 0:
            areas.append(dfs(i, j))
            
areas.sort()
print(len(areas))
print(*areas)