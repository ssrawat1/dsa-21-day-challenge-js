/****************************************************************
        Find if One String is a Substring of another (Manual Method)
         Input: Main String: "hellothere" Target string: "there"
         Output: true 
-> A substring is a contiguous sequence of characters within a larger string
*****************************************************************/

function isSubstring(str = 'programming is fun', target = 'is fun') {
  let n = str.length;
  let m = target.length;
  for (let i = 0; i <= n - m; i++) {
    let isMatched = true;
    for (let j = 0; j < m; j++) {
      if (str[i + j] !== target[j]) {
        isMatched = false;
        break;
      }
    }
    if (isMatched) return true;
  }
  return false;
}

console.log(isSubstring());
