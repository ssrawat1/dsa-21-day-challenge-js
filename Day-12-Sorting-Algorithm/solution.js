/* Sort an Array in Ascending Order Using Bubble Sort: */

function sortArray(arr = [5, 3, 8, 4, 2]) {
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

console.log(sortArray());
