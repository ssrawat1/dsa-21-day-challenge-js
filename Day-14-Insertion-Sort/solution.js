/********************************************************************************
        Sort an Array in Ascending Order Using Insertion Sort
                  Input: [9, 5, 1, 4, 3]
                  Output: [1, 3, 4, 5, 9]
 ********************************************************************************/

function sortArrayByInsertion(arr = [9, 5, 1, 4, 3]) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let idx = i - 1
    while (idx >= 0 && arr[idx] > current) {
      arr[idx + 1] = arr[idx]
      idx--
    }
    arr[idx + 1] = current
  }
  return arr
}

console.log(sortArrayByInsertion())