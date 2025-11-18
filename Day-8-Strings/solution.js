/*********************************************************************************** 
             Reverse a String (Manual Method Only)
             Input: "Javascript"
             Output: "tpircsavaj" (Don't use in-build methods like .reverse())

************************************************************************************/

function reverseString(str = 'javascript') {
  if (!str || !str.length) {
    throw new Error('Invalid String');
  }
  const lowerStr = str.toLowerCase();
  const chars = [];

  // Manual string to array conversion
  for (let i = 0; i < lowerStr.length; i++) {
    chars[i] = lowerStr[i];
  }

  // Two-pointer swap
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  // Manual array to string conversion
  let result = '';
  for (let i = 0; i < chars.length; i++) {
    result += chars[i];
  }

  return result;
}

console.log(reverseString());

/*********************************************************************************** 
             Check if a String is a palindrome
             Input: "racecar"
             Output: Palindrome (same character appear on both sides)

************************************************************************************/

function isPalindromeString(str = 'moon') {
  if (!str || !str.length) {
    throw new Error('Invalid String');
  }
  let start = 0;
  let end = str.length - 1;
  str = str.toLowerCase();
  while (start < end) {
    if (str[start] !== str[end]) return 'Not palindromic';
    start++;
    end--;
  }
  return 'Given string is palindromic string';
}

console.log(isPalindromeString());

/***************************************************************** 
          Count Frequency Of Each Character
                Input: "banana"
                Output: {b : 1, a : 3, n : 2}

******************************************************************/

function getFrequencyCount(str = 'banana') {
  let n = str.length;
  if (!str || !n) {
    throw new Error('Invalid String');
  }

  let freqObj = {};
  for (let i = 0; i < n; i++) {
    freqObj[str[i]] = (freqObj[str[i]] || 0) + 1;
  }

  return freqObj;
}

console.log(getFrequencyCount());

/***********************************************************
       Find the Most Frequent Character
    Single pass - find max while building frequency
                Input: "success"
                Output: { character: 's', frequency: 3 }
                
***********************************************************/

function maxFrequencyChar(str = 'success') {
  if (!str || !str.length) {
    throw new Error('Invalid String');
  }

  let freqObj = {};
  let maxFreq = 0;
  let maxChar = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freqObj[char] = (freqObj[char] || 0) + 1;

    if (freqObj[char] > maxFreq) {
      maxFreq = freqObj[char];
      maxChar = char;
    }
  }

  return { character: maxChar, frequency: maxFreq };
}

console.log(maxFrequencyChar());

/***********************************************************
       Check If Two Strings Are Anagrams (Without Sorting)
                Input: "listen" , "silent"
                Output: Anagram
                
***********************************************************/

function isAnagram(s1 = 'listen', s2 = 'silent') {
  if (s1.length !== s2.length) return 'Given strings are not an Anagram';

  let charFrequency = {};
  for (let i = 0; i < s1.length; i++) {
    charFrequency[s1[i]] = (charFrequency[s1[i]] || 0) + 1;
    charFrequency[s2[i]] = (charFrequency[s2[i]] || 0) - 1;
  }

  let keysArray = Object.keys(charFrequency);

  for (let i = 0; i < keysArray.length; i++) {
    if (charFrequency[keysArray[i]] != 0) return 'Given strings are not an anagrams';
  }

  return 'Given strings are an Anagrams';
}

console.log(isAnagram());

/***********************************************************************************
        Find the First Non-Repeating Character
( A non-repeating character is one that appears only once in the entire string)
                       Input: "aabbcddeff"
                       Output: c
************************************************************************************/

function findFirstNonRepeatingChar(str = 'aabbcddeff') {
  if (!str || !str.length) throw new Error('string is not valid');

  let freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str) {
    if (freq[char] === 1) return { char };
  }

  return "doesn't exist";
}

console.log(findFirstNonRepeatingChar());

/**************************************************************
      Remove All Duplicate Characters (Keep first occurrence)
                    Input: "programming"
                    Output: "progamin"
***************************************************************/

function removeDuplicate(str = 'programming') {
  if (!str || !str.length) throw new Error('string is not valid');

  let freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let newStr = '';
  for (const char in freq) {
    newStr += char;
  }
  return newStr;
}

console.log(removeDuplicate());

/****************************************************************
        Check if a String Contains Only Alphabets
              Input: "HelloWorld123"
              Output: False
*****************************************************************/

function isOnlyAlphabets(str = 'HelloWorld123') {
  if (!str || !str.length) throw new Error('string is not valid');
  for (let char of str) {
    if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
      return { isAlphabetic: false };
    }
  }
  return { isAlphabetic: true };
}

console.log(isOnlyAlphabets());

/****************************************************************
        Reverse Only the Words in a Sentence
              Input: "I love coding"
              Output: "coding love I"
*****************************************************************/

function reverseOnlyWords(s = 'I love coding') {
  if (!s || !s.length) return '';

  let words = [];
  let word = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i];
    } else {
      if (word.length > 0) {
        words.push(word);
        word = '';
      }
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  let result = '';

  console.log({ words });

  for (let i = 0; i < words.length; i++) {
    result = words[i] + result;
    if (i < words.length - 1) {
      result = ' ' + result;
    }
  }

  console.log({ result });
  return result;
}

console.log(reverseOnlyWords());

/****************************************************************
        Find the Longest Word in a Sentence
            Input: "coding is beautiful"
            Output: "beautiful"
*****************************************************************/

function findLongestWord(s = ' coding  is  beautiful ') {
  if (!s || !s.length) return { longestWord: '' };

  let longestWord = '';
  let word = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i];
    } else {
      if (word.length && word.length > longestWord.length) {
        longestWord = word;
      }
      word = '';
    }
  }

  if (word.length > longestWord.length) {
    longestWord = word;
  }

  return { longestWord };
}

console.log(findLongestWord());
