function solution(ingredient) {
    var answer = 0;
    var stack = []
    
    for (var i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if(stack.length >= 4) {
            var hamberger = stack.slice(-4).join('')
            
            if (hamberger == "1231") {
                answer++
                for (var j = 0; j < 4; j++) {
                    stack.pop()
                }
            }
        }
    }
    console.log(stack)
    
    return answer;
}