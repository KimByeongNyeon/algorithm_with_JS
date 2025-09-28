import sys
sys.setrecursionlimit(10 ** 6)

M, N = map(int, input().split())

# W, B 경우 나눠서 탐색 후 계산 하고 각각의 배열에 넣고 합 추가

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

arr = [list(input().strip()) for _ in range(N)]


visited = [[0 for _ in range(M)] for _ in range(N)]

w_list = []
b_list = []

def dfs(x, y, color):
    visited[x][y] = 1
    cnt = 1
    for k in range(4):
        nx, ny = x + dx[k], y + dy[k]
        if 0 <= nx < N and 0 <= ny < M:
            if visited[nx][ny] == 0 and arr[nx][ny] == color:
                cnt += dfs(nx, ny, color)
    return cnt
        

for i in range(N):
    for j in range(M):
        if visited[i][j] == 0:
            if arr[i][j] == 'W':
                w_list.append(dfs(i, j, 'W'))
            else :
                b_list.append(dfs(i, j, 'B'))

print(sum(x * x for x in w_list), sum(x * x for x in b_list))
