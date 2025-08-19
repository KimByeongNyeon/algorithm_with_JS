function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    let weak = 0;
    let heavy = people.length - 1;
    
    while (weak <= heavy) {
        if(people[weak] + people[heavy] <= limit) {
            weak++
        }
        heavy--
        answer++
    }
    return answer;
}