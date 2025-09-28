def isValid(a, b, oper):
    if oper == '>':
        return a > b
    else:
        return a < b

N = int(input())
arr = input().split()  # 부등호 리스트

visited = [0] * 10  # 0~9 숫자 방문 체크
answer = []

def dfs(depth, num):
    if depth == N + 1:  # 숫자 N+1개 완성
        answer.append(num)
        return
    
    for i in range(10):
        if not visited[i]:
            if depth == 0 or isValid(int(num[-1]), i, arr[depth - 1]):
                visited[i] = 1
                dfs(depth + 1, num + str(i))
                visited[i] = 0

dfs(0, '')

answer.sort()
print(answer[-1])
print(answer[0])