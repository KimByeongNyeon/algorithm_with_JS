function solution(numbers) {
    let answer = 0;
    const list = numbers.split('').map(Number); // 문자열 -> 숫자 배열
    const visited = Array(list.length).fill(false);
    const results = new Set();

    const isPrime = (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const collabo = (arr) => {
        if (arr.length > 0) {
            const num = parseInt(arr.join(''), 10);
            if (isPrime(num)) results.add(num);
        }

        for (let i = 0; i < list.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                collabo([...arr, list[i]]);
                visited[i] = false;
            }
        }
    }

    collabo([]);
    return results.size;
}
