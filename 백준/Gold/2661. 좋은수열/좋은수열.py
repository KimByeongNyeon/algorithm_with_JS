N = int(input())

def isValid(num):
    length = len(num)
    # 뒤에서 1~length//2만큼 반복되는지 체크
    for l in range(1, length // 2 + 1):
        if num[-l:] == num[-2*l:-l]:
            return False
    return True



def dfs(num):
    if len(num) == N:
        print(num)
        exit()

    for i in ['1', '2', '3']:
        new_num = num + i
        if isValid(new_num):
            dfs(new_num)


for i in ['1', '2', '3']:
    dfs(i)
