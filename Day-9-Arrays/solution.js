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

/****************************************************************
        Count Frequency of Each Word in a Sequence
            Input: "i love coding and i love javascript"
            Output: {i:2, love:2, coding:1, and:1, Javascript:1} 
*****************************************************************/

function getWordFrequency(str = 'i  love coding and i love javascript') {
  let wordFeq = {};
  let currWord = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      currWord += str[i];
    } else {
      if (currWord.length > 0) {
        wordFeq[currWord] = (wordFeq[currWord] || 0) + 1;
        currWord = '';
      }
    }
  }
  if (currWord.length > 0) {
    wordFeq[currWord] = (wordFeq[currWord] || 0) + 1;
    currWord = '';
  }
  return wordFeq;
}

console.log(getWordFrequency());

/****************************************************************
            Check if a string is a pangram
            Input: "The quick brown fox jumps over the lazy dog"
            Output: Pangram 
*****************************************************************/

function isPangram(str = 'The quick brown fox jumps over the lazy dog') {
  let set = new Set();

  str = str.toLowerCase();

  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      set.add(char);
      if (set.size === 26) return 'Pangram';
    }
  }

  return 'Not Pangram';
}

console.log(isPangram());

/****************************************************************
            Remove All Duplicate Words From a Sentence
            Input: "this is is a test test string"
            Output: "this is a test string" 
*****************************************************************/

function removeDuplicates(str = 'this is is a test test string') {
  const set = new Set();
  let word = '';
  let newStr = '';
  str += ' '; // add space to trigger last word

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word += str[i];
    } else {
      if (word.length > 0) {
        if (!set.has(word)) {
          set.add(word);
          newStr += word;
          newStr += ' ';
        }
        word = '';
      }
    }
  }

  // To remove trailing space manually

  let result = '';
  for (let i = 0; i < newStr.length; i++) {
    if (i === newStr.length - 1 && newStr[i] === ' ') continue;
    result += newStr[i];
  }
  return { result };
}

console.log(removeDuplicates());
