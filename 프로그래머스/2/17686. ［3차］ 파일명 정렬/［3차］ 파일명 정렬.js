function splitFile(file) {
  let head = "";
  let number = "";
  let i = 0;

  // HEAD 추출 (숫자 나오기 전까지)
  while (i < file.length && isNaN(parseInt(file[i]))) {
    head += file[i];
    i++;
  }

  // NUMBER 추출 (최대 5자리 숫자)
  while (i < file.length && !isNaN(parseInt(file[i])) && file[i] !== " " && number.length < 5) {
    number += file[i];
    i++;
  }

  return [head, number];
}

function solution(files) {
  return files.sort((a, b) => {
    const [headA, numA] = splitFile(a);
    const [headB, numB] = splitFile(b);

    // HEAD 비교 (대소문자 구분 X)
    const headCompare = headA.toLowerCase().localeCompare(headB.toLowerCase());
    if (headCompare !== 0) return headCompare;
    

    // NUMBER 비교
    return parseInt(numA || "0") - parseInt(numB || "0");
  });
}
