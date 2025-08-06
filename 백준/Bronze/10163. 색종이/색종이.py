T = int(input())

# 101x101 크기의 배열 생성
paper = [[0] * 1001 for _ in range(1001)]

# 색종이 정보 입력 및 배열에 적용
for num in range(1, T + 1):
    x, y, w, h = map(int, input().split())
    # 색종이의 각 칸을 설정
    for i in range(x, x + w):
        for j in range(y, y + h):
            paper[i][j] = num

# 색종이 번호별 면적 계산 및 출력
for num in range(1, T + 1):
    sum_area = 0
    for i in range(101):
        for j in range(101):
            if paper[i][j] == num:
                sum_area += 1
    print(sum_area)
