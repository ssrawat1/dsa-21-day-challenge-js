/********************************************************************************
        Sort an Array in Ascending Order Using Insertion Sort
                  Input: [9, 5, 1, 4, 3]
                  Output: [1, 3, 4, 5, 9]
 ********************************************************************************/

function sortInAscByInsertion(arr = [9, 5, 1, 4, 3]) {
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

console.log(sortInAscByInsertion())


/*************************************************************************************
        Sort an Array in Descending Order
              Input: [3, 8, 2, 7, 4]
              Output: [8, 7, 4, 3, 2] (Insert larger element at correct position.)
***************************************************************************************/

function sortInDescByInsertion(arr = [9, 5, 1, 4, 3]) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let idx = i - 1
    while (idx >= 0 && arr[idx] < current) {
      arr[idx + 1] = arr[idx]
      idx--
    }
    arr[idx + 1] = current
  }
  return arr
}

console.log(sortInDescByInsertion())


/*************************************************************************************
       Insert a New Element into an Already Sorted Array (Using Insertion Logic)
              Input: Sorted: [1, 3, 5, 6], New element: 4
              Output: [1, 3, 4, 5, 6]
***************************************************************************************/

function insertIntoSorted(arr = [5, 6, 7, 8, 9], n = 4) {
  let i = arr.length - 1

  while (i >= 0 && arr[i] > n) {
    arr[i + 1] = arr[i]
    i--
  }

  arr[i + 1] = n

  return arr
}

console.log(insertIntoSorted())