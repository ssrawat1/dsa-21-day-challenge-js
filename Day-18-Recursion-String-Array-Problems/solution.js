/* First ---> Solution */

function printArrayElements(arr, count = 0) {
  if (count === arr.length) return;
  console.log(arr[count++]);
  return printArrayElements(arr, count)
};

printArrayElements([1, 2, 3, 4, 5]);

/* Second ---> Solution */

function sumOfArrayElements(arr, count = 0) {
  if (count === arr.length) return 0;
  return arr[count] + sumOfArrayElements(arr, ++count)
};

console.log(sumOfArrayElements([2, 4, 5, 8]));

/* Third ---> Solution */


function isSortedArray(arr, count = 0) {
  if (count === arr.length - 1) return true;
  let isSorted = arr[count + 1] >= arr[count];
  return isSorted && isSortedArray(arr, count + 1)
};

console.log(isSortedArray([1, 2, 3, 5, 4]))

/* Fourth ----> Solution */

function reverseString(str, count = str.length - 1) {
  if (count === 0) return str[count];
  return str[count] + reverseString(str, --count)
};

console.log(reverseString("hello"))

/* Fifth ---> Solution */

function isPalindromicString(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  console.log({ left: str[left], right: str[right] })
  if (str[left] !== str[right]) return false;
  return isPalindromicString(str, ++left, --right);
};

console.log(isPalindromicString("madam"))

/* Sixth ---> Solution */

function stringLength(str, index = 0) {
  if (str[index] === undefined) return { length: index };
  return stringLength(str, ++index)
}

console.log(stringLength("javascript"))

/* Seventh ---> Solution */

function vowelCount(str, index = 0, count = 0) {
  if (index === str.length) return count
  if (str[index] === "a" || str[index] === "e" || str[index] === 'i' || str[index] === "o" || str[index] === "u") {
    count++
  }
  return vowelCount(str, ++index, count)
};

console.log(vowelCount("education"))

/* 8th --> Solution */

function getFirstOccurrences(arr, element, index = 0) {
  if (index === arr.length) return "Not Found";
  if (arr[index] === element) return index
  return getFirstOccurrences(arr, element, ++index)
};

console.log(getFirstOccurrences([5, 3, 7, 3, 9], 3))

/* 9th ---> Solution */

function getLastOccurrences(arr, element, index = arr.length) {
  if (index < 0) return "Not Found";
  if (arr[index] === element) return index
  return getLastOccurrences(arr, element, --index)
};

console.log(getLastOccurrences([5, 3, 7, 3, 9], 3))


/* 10th ---> Solution */

function charAppearance(str, char, index = 0, count = 0) {
  if (index === str.length) return count;
  if (str[index] === char) count++;
  return charAppearance(str, char, ++index, count)

}

console.log(charAppearance("recursion", "r"))


/* 11th ---> Solution */

function replaceAllOccurrences(str, char, replacer, index = 0) {
  if (index === str.length) return "";

  let current = str[index] === char ? replacer : str[index];

  return current + replaceAllOccurrences(str, char, replacer, index + 1);
}

console.log(replaceAllOccurrences("banana", "a", "x"));

/* 12th ---> Solution */

function isEven(arr, left = 0, right = arr.length - 1) {
  if (left > right) return true;
  if (arr[left] % 2 !== 0 || arr[right] % 2 !== 0) return false;
  return isEven(arr, left + 1, right - 1)
};

console.log(isEven([2]))

/* 13th ---> Solution */

function greatestElement(arr, index = 0, largestElement = -Infinity) {
  if (index === arr.length) return largestElement
  if (arr[index] > largestElement) {
    largestElement = arr[index]
  }
  return greatestElement(arr, index + 1, largestElement)
};

console.log(greatestElement([7, 3, 9, 2, 5]))