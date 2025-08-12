function solution(word) {
    var answer = 0;
    // 알파벳을 담은 배열
    var alpha = ["A", "E", "I", "O", "U"]
    // flag 값을 통한 제어
    var flag = false;
    const dfs = (char) => {
        // 단어의 길이가 5 이상일 때 혹은 flag 가 true 일 경우 함수 종료
        if (char.length > 5 || flag) return;
        
        // 만약 해당 단어를 찾으면
        if (char == word) {
            // flag true 로 변경
            flag = true;
            // 함수 종료
            return;
        }
        // answer 누적
        answer += 1
        
        for (var i = 0; i < alpha.length; i++) {
            dfs(char + alpha[i])
        }
    }
    dfs('')
    return answer;
}