mx = -1e9
N = int(input())
arr = list(map(int, input().split()))
visited = [0] * N
perm = []

def calc(seq):
    total = 0
    for i in range(len(seq) - 1):
        total += abs(seq[i] - seq[i+1])
    return total


def dfs(depth):
    global mx
    if depth == N:
        mx = max(mx, calc(perm))
        return
    for i in range(N):
        if visited[i] == 0:
            visited[i] = 1
            perm.append(arr[i])
            dfs(depth + 1)
            perm.pop()
            visited[i] = 0
            
dfs(0)
print(mx)