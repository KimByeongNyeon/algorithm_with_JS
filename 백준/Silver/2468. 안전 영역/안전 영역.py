import sys
sys.setrecursionlimit(100000)

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]

mx = 0

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(N):
    for j in range(N):
        if arr[i][j] > mx:
            mx = arr[i][j]
 
result = 1
            
def dfs(x, y, num):
    
    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]
        
        if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] == 0:
            if arr[nx][ny] > num:
                visited[nx][ny] = 1
                dfs(nx, ny, num)
        
            
for i in range(mx) :
    visited = [[0] * N for _ in range(N)]
    cnt = 0
    
    for j in range(N):
        for k in range(N):
            if arr[j][k] > i and visited[j][k] == 0:
                cnt += 1
                visited[j][k] = 1
                dfs(j, k, i)

    result = max(result, cnt)

print(result)