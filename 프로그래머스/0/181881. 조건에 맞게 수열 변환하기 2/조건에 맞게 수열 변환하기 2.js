function solution(arr) {
    let x = 0;
    let prev = [...arr]; // 초기 상태 복사

    while (true) {
        let next = prev.map(n => {
            if (n >= 50 && n % 2 === 0) return n / 2;
            else if (n < 50 && n % 2 === 1) return n * 2 + 1;
            else return n;
        });

        const isSame = prev.every((v, i) => v === next[i]);
        if (isSame) break;

        prev = next;
        x++;
    }

    return x;
}
