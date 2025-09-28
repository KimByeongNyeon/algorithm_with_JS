import math

N = int(input())

# 소수 판별 함수
def is_prime_number(x):
    # 2부터 x의 제곱근까지의 모든 수를 확인하며
    for i in range(2, int(math.sqrt(x)) + 1):
        # x가 해당 수로 나누어 떨어진다면
        if x % i == 0:
            return False # 소수가 아님
    return True


def dfs(num):
    if len(str(num)) == N:
        print(num)
        return

    for i in range(10):
        new_num = num * 10 + i
        if is_prime_number(new_num):
            dfs(new_num)


for start in [2, 3, 5, 7]:
    dfs(start)