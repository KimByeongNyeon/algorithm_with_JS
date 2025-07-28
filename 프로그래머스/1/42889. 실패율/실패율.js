function solution(N, stages) {
    var answer = [];
    var count = {}
    var fail = []
    var size = stages.length
   
    for (var i = 1; i <= N; i++) {
        // 분자 값 계산
        let num = stages.filter((value) => value === i).length
        
        // 스테이지와 분모에서 분자 값 나눈 값 저장
        fail.push([i, num/size])
        
        // 분모 공식
        size = size - num
    }
    answer = fail.sort((a, b) => b[1] - a[1]).map((value) => value[0])
    return answer;
}