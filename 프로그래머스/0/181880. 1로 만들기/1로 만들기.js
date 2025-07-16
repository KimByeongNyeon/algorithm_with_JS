function solution(num_list) {
    let answer = 0;

    for (let num of num_list) {
        if (num === 0) continue;

        while (num !== 1) {
            num = Math.floor(num / 2);
            answer += 1;
        }
    }

    return answer;
}
