const solution = (n) => {
  const dx = [1, 0, -1];
  const dy = [0, 1, -1];
  let len = 0;
  const recur = (n) => {
    if (n === 0) return;

    len += n;
    recur(n - 1);
  };
  recur(n);
  const arr = Array.from({ length: n }, () => Array(n).fill(0));

  arr[0][0] = 1;

  let x = 0;
  let y = 0;
  let num = 2;
  let dir = 0;
  while (num <= len) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[nx][ny] !== 0) {
      dir = (dir + 1) % 3;
      nx = x + dx[dir];
      ny = y + dy[dir];
    }
    arr[nx][ny] = num;
    x = nx;
    y = ny;
    num++;
  }
  result = arr.flat().filter((value) => value !== 0);
    return result;
};
