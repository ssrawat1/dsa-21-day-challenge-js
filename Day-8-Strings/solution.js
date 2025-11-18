/*********************************************************************************** 
             Reverse a String (Manual Method Only)
             Input: "Javascript"
             Output: "tpircsavaj" (Don't use in-build methods like .reverse())

************************************************************************************/

function reverseString(str = 'javascript') {
  const lowerStr = str.toLowerCase();
  const chars = [];

  // Manual string to array conversion
  for (let i = 0; i < lowerStr.length; i++) {
    chars[i] = lowerStr[i];
  }

  // Two-pointer swap
  let left = 0,
    right = chars.length - 1;

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
