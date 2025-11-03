/* Print Right Angled Start Triangle:
 *
 **
 ***
 ****
 *****
 */

function printStartPattern(rows = 10) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += '*' + ' ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(printStartPattern());

