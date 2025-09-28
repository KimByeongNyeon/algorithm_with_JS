# 9개의 줄에 9개의 숫자로 보드가 입력된다. 아직 숫자가 채워지지 않은 칸에는 0이 주어진다.

# 출력
# 9개의 줄에 9개의 숫자로 답을 출력한다. 답이 여러 개 있다면 그 중 사전식으로 앞서는 것을 출력한다. 즉, 81자리의 수가 제일 작은 경우를 출력한다.

# 제한
# 예제 입력 1 
# 103000509
# 002109400
# 000704000
# 300502006
# 060000050
# 700803004
# 000401000
# 009205800
# 804000107
# 예제 출력 1 
# 143628579
# 572139468
# 986754231
# 391542786
# 468917352
# 725863914
# 237481695
# 619275843
# 854396127

arr = [list(map(int, input().strip())) for _ in range(9)]

blank_list = []

def can_place(arr, i, j, num):
    # 행 체크
    if num in arr[i]:
        return False
    # 열 체크
    if num in [arr[x][j] for x in range(9)]:
        return False
    # 3x3 박스 체크
    start_row = (i // 3) * 3
    start_col = (j // 3) * 3
    for r in range(start_row, start_row + 3):
        for c in range(start_col, start_col + 3):
            if arr[r][c] == num:
                return False
    return True


for i in range(9):
    for j in range(9):
        if arr[i][j] == 0:
            blank_list.append([i, j])
            

def dfs(depth):
    if depth == len(blank_list):
        for row in arr:
            print(''.join(map(str, row)))
        exit()
    x, y = blank_list[depth]
    for i in range(1, 10):
        if can_place(arr, x, y, i):
            arr[x][y] = i
            dfs(depth + 1)
            arr[x][y] = 0

dfs(0)