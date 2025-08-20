function solution(record) {
    var answer = [];
    const user = {};
    var stack = [];
    for(var rec of record) {
        var arr = rec.split(' ')
        const cmd = arr[0];
        const uid = arr[1];
        const nick = arr[2];
        
        if (cmd === "Enter") {
            user[uid] = nick;
            stack.push([uid, cmd])
        } else if (cmd === "Leave") {
            stack.push([uid, cmd])
        } else if (cmd === "Change") {
            user[uid] = nick
        }
        
        
    } 
    for (let [uid, action] of stack) {
        const member = user[uid]
        if (action === "Enter") {
            answer.push(member + "님이 들어왔습니다.")
        } else {
            answer.push(member + "님이 나갔습니다.")
        }
    }
    return answer;
}