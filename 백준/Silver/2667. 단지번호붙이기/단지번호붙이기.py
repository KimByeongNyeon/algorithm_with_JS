N = int(input())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

arr = [list(map(int, input().strip())) for _ in range(N)]

visited = [[0]*N for _ in range(N)]

def DFS(i, j) :
    visited[i][j] = 1
    
    count = 1
    for k in range(4):
        nx, ny = i+dx[k], j+dy[k]
        
        if 0 <= nx < N and 0 <= ny < N:
            if visited[nx][ny] == 0 and arr[nx][ny] == 1:
                count += DFS(nx, ny)
    return count


answer = []

for i in range(N):
    for j in range(N):
        if arr[i][j] == 1 and visited[i][j] == 0:
            answer.append(DFS(i,j))
            
answer.sort()

print(len(answer))
for x in range(len(answer)):
    print(answer[x])