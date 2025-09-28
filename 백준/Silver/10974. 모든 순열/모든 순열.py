N = int(input())

visited = [False for _ in range(N)]

def dfs(arr) :
    if len(arr) == N:
        print(' '.join(map(str, arr)))
        return
    for i in range(1, N + 1):
        if visited[i - 1] == False:
            visited[i - 1] = True
            arr.append(i)
            dfs(arr)
            arr.pop()
            visited[i - 1] = False

dfs([])