/********************************************************************************
        Sort an Array in Ascending Order Using Insertion Sort
                  Input: [9, 5, 1, 4, 3]
                  Output: [1, 3, 4, 5, 9]
 ********************************************************************************/

function sortArrayByInsertion(arr = [9, 5, 1, 4, 3]) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i + 1]
    let idx = i
    while (idx !== 0 && arr[idx] > current) {
      idx--
    }
    arr[idx] = current
  }

  return arr

}

console.log(sortArrayByInsertion())