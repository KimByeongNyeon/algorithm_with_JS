function solution(order) {
  var answer = 0;
  const stack = [];
    let box = 1
    let result = 0;
    let idx = 0;
  while (stack.length > 0 || box <= order.length) {
    if (order[idx] === box) {
        box++
        result++
        idx++
    } else if (stack.length && stack[stack.length - 1] === order[idx]) {
        stack.pop();
        result++;
        idx++
    } else if (box <= order.length) {
        stack.push(box);
        box++
    }else {
        break
    }
  }
  return result;
}
