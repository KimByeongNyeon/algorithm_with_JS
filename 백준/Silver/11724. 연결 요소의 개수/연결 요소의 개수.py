N, M = map(int, input().split())
cnt = 0
dict = {i: [] for i in range(1, N + 1)}
visited = [0] * (N + 1)

for j in range(M):
    u, v = map(int, input().split())
    dict[u].append(v)
    dict[v].append(u)


def dfs(node):
    visited[node] = 1
    for next in dict[node]:
        if visited[next] == 0:
            dfs(next)
            

for i in range(1, N + 1):
    if visited[i] == 0:
        dfs(i)
        cnt += 1

print(cnt)