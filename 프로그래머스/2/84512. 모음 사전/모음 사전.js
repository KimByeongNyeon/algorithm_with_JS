const solution = (word) => {
  let answer = 0;
  let map = {
    1: "A",
    2: "E",
    3: "I",
    4: "O",
    5: "U",
  };
  let set = [];
  // dfs 사용
  const dfs = (str) => {
    if (str.length > 5) return;
    set.push(str);

    for (let i = 0; i <= 5; i++) {
      dfs(str + map[i]);
    }
  };
  for (let i = 1; i <= 5; i++) {
    dfs(map[i]);
  }
  console.log(set);
  set.sort();
  for (let i = 0; i < set.length; i++) {
    if (word === set[i]) answer = i + 1;
  }
  console.log(set);
  return answer;
};