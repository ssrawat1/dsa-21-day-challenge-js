/******************************************************************
     Sort an Array in Ascending Order Using Selection Sort
                  Input: [7, 2, 9, 4, 1]
                  Output: [1, 2, 4, 7, 9]
 *******************************************************************/

function sortInAsc(arr = [7, 2, 9, 4, 1]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

console.log(sortInAsc());

/******************************************************************
     Sort an Array in Ascending Order Using Selection Sort
                  Input: [3, 8, 5, 2, 9]
                  Output: [9, 8, 5, 3, 2]

 *******************************************************************/

function sortInDesc(arr = [3, 8, 5, 2, 9]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

console.log(sortInDesc());
