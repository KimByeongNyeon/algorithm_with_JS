function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"]
    var answer = 0;
    const word_len = word.length;
    const len = babbling.length;
    for (var i = 0; i < len; i++) {
        let babble = babbling[i]
        for (var j = 0; j < word_len; j++) {
            if (babble.includes(word[j].repeat(2))) {
                break;
            }
            babble = babble.split(word[j]).join(" ")
        }
        if (babble.split(" ").join("").length === 0) {
            answer += 1
        }
    }
    return answer;
}