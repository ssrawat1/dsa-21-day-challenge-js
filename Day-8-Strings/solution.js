/*********************************************************************************** 
             Reverse a String (Manual Method Only)
             Input: "Javascript"
             Output: "tpircsavaj" (Don't use in-build methods like .reverse())

************************************************************************************/

function reverseString(str = 'javascript') {
  let reverseStr = '';
  for (const char of str) {
    reverseStr = char + reverseStr;
  }

  return reverseStr;
}

console.log(reverseString());


