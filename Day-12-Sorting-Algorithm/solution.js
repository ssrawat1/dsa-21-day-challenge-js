/**************************************************************************
           Sort an Array in Ascending Order Using Bubble Sort: 
           input: [5, 3, 8, 4, 2]
           TC -> O (n^2)
           Note -> For Descending order just reverse the inner condition
 **************************************************************************/

function sortArrayInAsc(arr = [5, 3, 8, 4, 2]) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - i; j++) {
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

function sortStrInAsc(str = 'javascript') {
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr[i] = str[i];
  }

  for (let j = 0; j < strArr.length; j++) {
    let isSwap = false;
    for (let k = 0; k < str.length - j; k++) {
      if (strArr[k] > strArr[k + 1]) {
        [strArr[k], strArr[k + 1]] = [strArr[k + 1], strArr[k]];
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
