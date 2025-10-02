R, C, K = map(int, input().split())
arr = [list(input().strip()) for _ in range(R)]

visited = [[0] * C for _ in range(R)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
answer = 0

def dfs(x, y, dist):
    global answer
    if x == 0 and y == C - 1:
        if dist == K:
            answer += 1
        return
        
    visited[x][y] = 1
    for k in range(4):
        nx, ny = x + dx[k], y + dy[k]
        if 0 <= nx < R and 0 <= ny < C:
            if visited[nx][ny] == 0 and arr[nx][ny] != "T":
                visited[nx][ny] = 1
                dfs(nx, ny, dist + 1)
                visited[nx][ny] = 0


visited[R - 1][0] = 1
dfs(R - 1, 0, 1)

print(answer)
        