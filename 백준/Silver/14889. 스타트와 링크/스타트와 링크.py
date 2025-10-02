import sys

N = int(sys.stdin.readline())
arr = [list(map(int, (sys.stdin.readline()).split())) for _ in range(N)]

visited = [0 for _ in range(N)]

mn = 1000000000000000000

def back(depth, idx) :
    global mn
    if depth == N // 2:
        s, l = 0, 0
        for i in range(N):
            for j in range(N):
                if visited[i] and visited[j]:
                    s += arr[i][j]
                elif not visited[i] and not visited[j]:
                    l += arr[i][j]
        mn = min(mn, abs(s - l))
        return
    else :
        for i in range(idx, N):
            if visited[i] == 0:
                visited[i] = 1
                back(depth + 1, i + 1)
                visited[i] = 0
                
back(0, 0)
print(mn)