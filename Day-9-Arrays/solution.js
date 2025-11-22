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

/****************************************************************
       Manual Substring Search and return its starting index (Without Using IndexOf)
            Input: "hello world", pattern = "wor"
            Output: Found at index 6 
*****************************************************************/

function IndexOfSubStr(str = 'hello world', subStr = 'llo') {
  let n = str.length;
  let m = subStr.length;
  for (let i = 0; i <= n - m; i++) {
    let isMatched = true;
    for (let j = 0; j < m; j++) {
      if (str[i + j] !== subStr[j]) {
        isMatched = false;
        break;
      }
    }
    if (isMatched) return i;
  }
  return -1;
}

console.log(IndexOfSubStr());

/****************************************************************
        Check if One String is rotation of another
            Input:"abcde", "cdeab"
            Output: Rotation 
*****************************************************************/

function isRotationString(s1 = 'abcde', s2 = 'cdeab') {
  if (s1.length !== s2.length) return false;
  s1 += s1;
  let n = s1.length;
  let m = s2.length;
  for (let i = 0; i <= n - m; i++) {
    let isMatched = true;
    for (let j = 0; j < m; j++) {
      if (s1[i + j] !== s2[j]) {
        isMatched = false;
        break;
      }
    }
    if (isMatched) return true;
  }
  return false;
}

console.log(isRotationString());
