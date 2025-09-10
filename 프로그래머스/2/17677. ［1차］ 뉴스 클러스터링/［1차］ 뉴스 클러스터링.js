function isAlpha(ch) {
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); 
}

function countMap(arr) {
  const map = new Map();
  for (let v of arr) {
    map.set(v, (map.get(v) || 0) + 1);
  }
  return map;
}

function append(str) {
    let list = []
    for (let i = 0; i < str.length - 1; i++) {
        const a = str[i];
        const b = str[i + 1];
        if (isAlpha(a) && isAlpha(b)) list.push(a + b);
      }
    return list
}

function jakad(list1, list2) {
  if (list1.length === 0 && list2.length === 0) return 65536;

  const map1 = countMap(list1);
  const map2 = countMap(list2);

  let gyo = 0;
  let hap = 0;

  const allKeys = new Set([...map1.keys(), ...map2.keys()]);
  for (let key of allKeys) {
    const c1 = map1.get(key) || 0;
    const c2 = map2.get(key) || 0;
    gyo += Math.min(c1, c2);
    hap += Math.max(c1, c2);
  }

  return Math.floor((gyo / hap) * 65536);
}

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
    let list1 = append(str1)
    let list2 = append(str2)

  return jakad(list1, list2);
}
