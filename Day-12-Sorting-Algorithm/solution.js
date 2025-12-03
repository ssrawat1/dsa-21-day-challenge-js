/**************************************************************************
           Sort an Array in Ascending Order Using Bubble Sort: 
           input: [5, 3, 8, 4, 2]
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
           input: "javascript"
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
           input: [9, 4, 2, 7, 6, 5]
           output: [9, 2, 4, 7, 6, 5]
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
