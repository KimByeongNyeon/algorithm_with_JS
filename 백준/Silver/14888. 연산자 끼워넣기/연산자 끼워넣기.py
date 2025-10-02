N = int(input())

num_list = list(map(int, input().split()))
op = list(map(int, input().split()))

mx = -1e9
mn = 1e9

def dfs(depth, total, sum, minus, multi, divide) :
    global mx, mn
    if depth == N:
        mx = max(total, mx)
        mn = min(total, mn)
        return
    if sum != 0 :
        dfs(depth + 1, (total + num_list[depth]), sum - 1, minus, multi, divide)
    if minus != 0 :
        dfs(depth + 1, (total - num_list[depth]), sum, minus - 1, multi, divide)
    if multi != 0:
        dfs(depth + 1, (total * num_list[depth]), sum, minus, multi - 1, divide)
    if divide != 0:
        dfs(depth + 1, int(total / num_list[depth]), sum, minus, multi, divide - 1)

dfs(1, num_list[0], op[0], op[1], op[2], op[3])
print(mx)
print(mn)