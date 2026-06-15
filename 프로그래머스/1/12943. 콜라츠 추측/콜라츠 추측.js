const solution = (num) => {
  const recur = (num, depth) => {
    if (num === 1) {
      return depth;
    }
    if (depth > 500) {
      return -1;
    }

    if (num % 2 === 0) {
      let next = num / 2;
      return recur(next, depth + 1);
    } else {
      let next = num * 3 + 1;
      return recur(next, depth + 1);
    }
  };
  let result = recur(num, 0);
  return result
};

