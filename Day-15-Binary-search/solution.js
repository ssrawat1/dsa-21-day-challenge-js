/********************************************************************************
        Find an Element in an Array Using Linear Search
               Input: array = [4, 2, 7, 1, 9], element = 7
               Output: Found at index 2
 ********************************************************************************/

function searchElement(arr = [4, 2, 7, 1, 9], element = 5) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return { index: i }
    }

  }
   throw new Error("Element does not exist")
};

console.log(searchElement())