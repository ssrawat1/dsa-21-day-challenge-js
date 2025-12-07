/******************************************************************
     Sort an Array in Ascending Order Using Selection Sort
                  Input: [7, 2, 9, 4, 1]
                  Output: [1, 2, 4, 7, 9]
 *******************************************************************/

function sort(arr = [7, 2, 9, 4, 1]) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(i);
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}

console.log(sort());
