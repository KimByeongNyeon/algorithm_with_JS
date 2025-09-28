dp = [0 for _ in range(251)]
dp[0] = 1
dp[1] = 1

def fibo(N):
    for i in range(2, N + 1):
        dp[i] = 2 * dp[i - 2] + dp[i - 1]
    return dp[N]

while True:
    try :
        N = int(input())
        answer = fibo(N)
        print(answer)

    except: 
        break
