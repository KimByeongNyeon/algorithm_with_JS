function solution(id_pw, db) {
    var answer = 'fail';
    db.map((value) => {
        if (value[0] == id_pw[0]) {
            if (value[1] == id_pw[1]) {
                answer = "login"
            } else {
                answer = "wrong pw"
            }
        }
    })
    return answer;
}