N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]

visited = [0 for _ in range(N)]

answer = 100000000000000000

def back(start, now, cnt, depth):
    global answer
    if depth == N:
        if arr[now][start] != 0:
            answer = min(answer, cnt + arr[now][start])
            return
    
    for next in range(N):
        if visited[next] == 0 and arr[now][next] != 0:
            visited[next] = 1
            back(start, next, cnt + arr[now][next], depth + 1)
            visited[next] = 0



for i in range(N):
    visited[i] = 1
    back(i, i, 0, 1)
    visited[i] = 0

print(answer)
