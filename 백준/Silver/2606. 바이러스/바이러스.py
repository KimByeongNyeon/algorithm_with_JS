N = int(input())
M = int(input())

arr = {}
cnt = 0

visited = [0] * (N + 1)
for i in range(1, N + 1):
    arr[i] = []
    
for node in range(M):
    a, b = map(int, input().split())
    arr[a].append(b);
    arr[b].append(a);


def dfs(i):
    global cnt
    visited[i] = 1
    for next in arr[i]:
        if visited[next] == 0 :
            cnt += 1
            dfs(next)
            
dfs(1)
print(cnt)