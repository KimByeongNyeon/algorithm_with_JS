import sys
sys.setrecursionlimit(10 ** 6)

N, M, K = map(int, input().split())
arr = [[0 for _ in range(M)] for _ in range(N)]

for _ in range(K):
    x, y = map(int, input().split())
    arr[x - 1][y - 1] = 1

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

visited = [[0 for _ in range(M)] for _ in range(N)]
answer_arr = []

def dfs(x, y):
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
            answer_arr.append(dfs(i,j))


answer_arr.sort()

if len(answer_arr) > 0 :
    print(answer_arr[len(answer_arr) - 1])
else :
    print("10ra")