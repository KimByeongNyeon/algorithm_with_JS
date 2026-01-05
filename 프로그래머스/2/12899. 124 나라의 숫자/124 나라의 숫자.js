const solution = (n) => {
  var answer = "";

  while (n > 0) {
    let num = n % 3;
    if (num === 1) {
      answer += "1";
    } else if (num === 2) {
      answer += "2";
    } else {
      answer += "4";
      n--;
    }

    n = Math.floor(n / 3);
  }

  return answer.split("").reverse().join("");
};
