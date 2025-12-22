/********************************************************************************
        Find an Element in an Array Using Linear Search
               Input: array = [4, 2, 7, 1, 9], element = 7
               Output: Found at index 2
 ********************************************************************************/

function searchElement(arr = [4, 2, 7, 1, 9], element = 7) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return { index: i }
    }

  }
  throw new Error("Element does not exist")
};

console.log(searchElement())


/********************************************************************************
       Find the First Occurrence of an Element
             Input: [3, 5, 3, 7, 3], search = 3
             Output: index 0
 ********************************************************************************/

function getFirstOccurrence(arr = [3, 5, 3, 7, 3], search = 3) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) return { firstIndex: i }

  }
};
console.log(getFirstOccurrence())

/********************************************************************************
       Find the Last Occurrence of an Element
               Input: [3, 5, 3, 7, 3], search = 3
               Output: index 4
 ********************************************************************************/

function getLastOccurrence(arr = [3, 5, 3, 7, 3], search = 3) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === search) return { lastIndex: i }

  }
};
console.log(getLastOccurrence())


/********************************************************************************
       Count How Many Times an Element Appears
               Input: [1, 2, 2, 3, 2, 4], element = 2
               Output: 3 times
 ********************************************************************************/

function findOccurrencesOfElements(arr = [1, 2, 2, 3, 2, 4], element = 2) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) count++

  }
  return { Element: element, Appearance: count }
}

console.log(findOccurrencesOfElements())