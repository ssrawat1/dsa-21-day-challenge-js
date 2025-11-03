/* Print Right Angled Start Triangle:
 *
 **
 ***
 ****
 *****
 */

function rightAngledTrianglePattern(rows = 5) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += '*' + ' ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(rightAngledTrianglePattern());

/* print inverted Right Angled Triangle:





*/

function invertedRightAngledTrianglePattern(rows = 5) {
  let pattern = '';

  for (let i = 0; i < rows; i++) {
    for (let j = i; j < rows; j++) {
      pattern += '*' + ' ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(invertedRightAngledTrianglePattern());
