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


/*************************************************************************************
       Sort an Array but Keep Odd Numbers Fixed
             Input: [9, 4, 7, 6, 3, 2]
             Output: Sort evens only, odd positions unchanged.
***************************************************************************************/

function sortOdd(arr = [9, 4, 7, 6, 3, 2]) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) continue
    let current = arr[i]
    let idx = i - 1;
    let swapIdx = i
    while (idx >= 0) {
      if (arr[idx] % 2 == 0 && arr[idx] > current) {
        [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
        swapIdx = idx
      }
      idx--
    }
  };
  return arr
}

console.log(sortOdd())


/*************************************************************************************
       Sort an Array Using Insertion Sort but Print Array After Each Pass
              Input: [5, 2, 4, 6, 1]
              Output: State of array after each insertion step.
***************************************************************************************/

function printArrayAfterEachInsertion(arr = [5, 2, 4, 6, 1]) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let idx = i - 1
    while (idx >= 0 && arr[idx] > current) {
      arr[idx + 1] = arr[idx]
      idx--
    }
    arr[idx + 1] = current
    console.log(`Pass ${i}:`, [...arr]);
  }
}

printArrayAfterEachInsertion()


/*************************************************************************************
       Find the Position Where an Element Should Be Inserted in a Sorted Array
                 Input: [2, 4, 6, 8], element = 5
                 Output: Index where 5 should be placed.
***************************************************************************************/

function insertElementAtRightPosition(arr = [2, 4, 6, 8], element = 5) {
  arr.push(null);

  let i = arr.length - 2;
  while (i >= 0 && arr[i] > element) {
    arr[i + 1] = arr[i];
    i--;
  }
  arr[i + 1] = element;
  return arr;
}

console.log(insertElementAtRightPosition());


/*************************************************************************************
       Check If an Array Becomes Sorted After Inserting One Element
               Input: [1, 2, 4, 5, 3]
               Output: Yes / No ✨ Essentially simulate “one-step insertion”.
***************************************************************************************/

function isSortedAfterFirstInsertion(arr = [1, 2, 4, 5, 3]) {
  let unsortedCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (unsortedCount > 1) return "NO"
    if (arr[i] > arr[i + 1]) {
      unsortedCount++;
    }
  }

  return "YES"
}

console.log(isSortedAfterFirstInsertion())