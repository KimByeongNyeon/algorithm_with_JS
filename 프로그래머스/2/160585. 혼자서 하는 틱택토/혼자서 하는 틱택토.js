const win = (b, p) => {
  const lines = [
    // rows
    b[0][0] + b[0][1] + b[0][2],
    b[1][0] + b[1][1] + b[1][2],
    b[2][0] + b[2][1] + b[2][2],
    // cols
    b[0][0] + b[1][0] + b[2][0],
    b[0][1] + b[1][1] + b[2][1],
    b[0][2] + b[1][2] + b[2][2],
    // diags
    b[0][0] + b[1][1] + b[2][2],
    b[0][2] + b[1][1] + b[2][0],
  ];
  return lines.includes(p + p + p);
};

const solution = (board) => {
  let oCnt = 0, xCnt = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "O") oCnt++;
      else if (board[i][j] === "X") xCnt++;
    }
  }

  if (xCnt > oCnt) return 0;
  if (oCnt > xCnt + 1) return 0;

  const oWin = win(board, "O");
  const xWin = win(board, "X");

  if (oWin && xWin) return 0;
  if (oWin && oCnt !== xCnt + 1) return 0;
  if (xWin && oCnt !== xCnt) return 0;

  return 1;
};
