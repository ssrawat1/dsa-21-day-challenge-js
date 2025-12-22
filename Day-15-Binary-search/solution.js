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

/********************************************************************************
       Find All Indexes Where the Element Appears
               Input: [5, 7, 5, 9, 5], search = 5
               Output: [0, 2, 4]
 ********************************************************************************/

function getAppearanceIndex(arr = [5, 7, 5, 9, 5], search = 5) {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) indexes.push(i)

  }
  return indexes
}

console.log(getAppearanceIndex())


/********************************************************************************
       Linear Search in Array of Objects
              Input:  [
                          { id: 1, name: "A" },
                          { id: 2, name: "B" },
                          { id: 3, name: "C" },
                      ];
              Search id = 2
              Output: {id:2, name:"B"}
 ********************************************************************************/

let arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];
let id = 2

function getElementById(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return arr[i]
  }
  throw new Error("Element doesn't exist")
}

console.log(getElementById(arr, id))


/********************************************************************************
       Check If an Element Exists in a 2D Array
              Input:  [
                            [1, 2],
                            [3, 4],
                            [5, 6]
                      ]
              search = 4
              Output: Found at position (1,1)
 ********************************************************************************/
let array = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const element = 7
function isExist(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j])
      if (arr[i][j] === element) return `Found at position (${i},${j})`
    }
  }
  return "Element doesn't exist"
};

console.log(isExist(array, element))


/********************************************************************************
        Find the Minimum Value Using Linear Scan
              Input: [9, 3, 5, 1, 7]
              Output: 1
 ********************************************************************************/

function getMaximumValue(arr = [9, 3, 5, 1, 7]) {
  let minVal = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i]
    }
  }
  return { minVal }
};

console.log(getMaximumValue())

/********************************************************************************
        Find the Maximum Value Using Linear Scan
             Input: [4, 9, 2, 11, 6]
             Output: 11
 ********************************************************************************/

function getMaxValue(arr = [4, 9, 2, 11, 6]) {
  let maxValue = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) maxValue = arr[i]
  }
  return { maxValue }
};
console.log(getMaxValue())