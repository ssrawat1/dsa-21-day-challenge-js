/**************************************************************************
           Sort an Array in Ascending Order Using Bubble Sort: 
           Input: [5, 3, 8, 4, 2]
           TC -> O (n^2)
           Note -> For Descending order just reverse the inner condition
 **************************************************************************/

function sortArrayInAsc(arr = [5, 3, 8, 4, 2]) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return arr;
}

console.log(sortArrayInAsc());

/**************************************************************************
           Sort a String Alphabetically Using Bubble Sort Logic
           Input: "javascript"
           TC -> O (n^2)
 **************************************************************************/

function toLowerManual(ch) {
  const code = ch.charCodeAt(0);
  return code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : ch;
}

function sortStrInAsc(str = 'JaVaScRiPt') {
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr[i] = str[i];
  }

  for (let j = 0; j < strArr.length; j++) {
    let isSwap = false;
    for (let k = 0; k < str.length - j - 1; k++) {
      let ch1 = toLowerManual(strArr[k]);
      let ch2 = toLowerManual(strArr[k + 1]);
      if (ch1 > ch2) {
        [strArr[k], strArr[k + 1]] = [ch2, ch1];
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }

  /* building string again from sorted array */
  let sortedStr = '';

  for (let i = 0; i < strArr.length; i++) {
    sortedStr += strArr[i];
  }
  return sortedStr;
}

console.log(sortStrInAsc());

/**************************************************************************
      Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)
           Input: [9, 4, 2, 7, 6, 5]
           Output: [9, 2, 4, 7, 6, 5]
           TC -> O (n^2)
 **************************************************************************/

function sortEvenNum(arr = [9, 4, 2, 7, 6, 5]) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) continue;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] % 2 === 0 && arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        isSwap = true;
      }
    }
  }
  return arr;
}

console.log(sortEvenNum());

/**************************************************************************
      Sort an array and count the number of swaps performed 
           Input: [4, 3, 2, 1]
           Output: sorted = [1, 2, 3, 4], count =  6
           TC -> O (n^2)
 **************************************************************************/

function sortArraySwapCount(arr = [4, 3, 2, 1]) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
        count++;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return { sortedArr: arr, totalSwapCount: count };
}

console.log(sortArraySwapCount());

/**************************************************************************
      Sort an Array of Objects by Age (Ascending)
          Input : [
                   { name: 'A', age: 25 },
                   { name: 'B', age: 20 },
                   { name: 'C', age: 30 },
                 ];

           Output:  Sorted by age.
           TC -> O (n^2)
 **************************************************************************/

let arr = [
  { name: 'A', age: 25 },
  { name: 'B', age: 20 },
  { name: 'C', age: 30 },
];

function sortByAge(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].age > arr[j + 1].age) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[i]];
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return arr;
}

console.log(sortByAge(arr));

/**************************************************************************
      Sort an Array but Keep Zeros at the End (Zeros Fixed)
          Input: [3, 0, 5, 0, 2, 1]
          Output: [1, 2, 3, 5, 0, 0]
          TC -> O (n^2)
 **************************************************************************/

function moveZerosAtEnd(arr = [3, 0, 5, 0, 2, 1]) {
  let p1 = 0;
  let p2 = 1;

  while (p2 < arr.length) {
    if (arr[p1] === 0 && arr[p2] !== 0) {
      [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
      p1++;
      p2++;
    } else if (arr[p1] === 0 && arr[p2] === 0) {
      p2++;
    } else {
      p1++;
      p2++;
    }
  }
  return arr;
}

console.log(moveZerosAtEnd());

/**************************************************************** 
        Sort an Array of Characters Case-Insensitive
                 Input: ['b', 'A', 'd', 'C']
                 Output: ['A', 'b', 'C', 'd']

****************************************************************/

function toLowerCase(char) {
  let code = char.charCodeAt(0);
  return code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : char;
}

function sortChar(arr = ['b', 'A', 'd', 'C']) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let ch1 = toLowerCase(arr[j]);
      let ch2 = toLowerCase(arr[j + 1]);
      if (ch1 > ch2) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(sortChar());

/**************************************************************** 
        Sort a 2D Array by the First Element of Each Subarray
                 Input: [[3, "c"], [1, "a"], [2, "b"]]
                 Output: [[1, "a"], [2, "b"], [3, "c"]]
*****************************************************************/

function sort2DArray(
  arr = [
    [3, 'c'],
    [1, 'a'],
    [2, 'b'],
  ]
) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const [a] = arr[j];
      const [b] = arr[j + 1];
      if (a > b) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(sort2DArray());

/**************************************************************** 
        Sort an Array in Ascending Order but Stop After K Passes
                Input: [5, 4, 3, 2, 1], K = 2
                Output: Array state after 2 bubble sort passes.
*****************************************************************/

function sortUptoK(arr = [5, 4, 3, 2, 1], K = 2) {
  for (let i = 0; i < K; i++) {
    let isSwap = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }

    if (!isSwap) break;
  }

  return arr;
}

console.log(sortUptoK());

/******************************************************************
      Sort an Array of Strings by Length (Shortest to Longest)
              Input: ["hi", "javascript", "is", "fun"]
              Output: ["hi", "is", "fun", "javascript"]
 *******************************************************************/

function sortByLength(arr = ['hi', 'javascript', 'is', 'fun']) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(sortByLength());
