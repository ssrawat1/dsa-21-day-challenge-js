/* Print Right Angled Start Triangle:

                   *
                   **
                   ***
                   ****
                   *****
 */

const { forwardRef } = require('react');

function rightAngledTrianglePattern(rows = 5) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(rightAngledTrianglePattern());

/* print inverted Right Angled Triangle:

                   * * * * *
                   * * * *
                   * * *
                   * *
                   *
*/

function invertedRightAngledTrianglePattern(rows = 5) {
  let pattern = '';

  for (let i = 0; i < rows; i++) {
    for (let j = i; j < rows; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(invertedRightAngledTrianglePattern());

/* Print Pyramid Pattern:

            *
            * * *
            * * * * *
            * * * * * * *
            * * * * * * * * *
 */

function printPyramidPattern(rows = 5) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = i + 1; j < rows; j++) {
      //print spaces
      pattern += '  ';
    }
    for (let k = 0; k < i + 1; k++) {
      // print star
      pattern += '* ';
    }
    for (let c = 0; c < i; c++) {
      // print star
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(printPyramidPattern());

/* Inverted Pyramid:

       * * * * * * * * *
         * * * * * * *
           * * * * *
             * * *
               *
 */

function invertedPyramidPattern(rows = 5) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < i; k++) {
      pattern += '  ';
    }
    for (let j = i; j < rows; j++) {
      pattern += '* ';
    }
    for (let c = i + 1; c < rows; c++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}
console.log(invertedPyramidPattern());

/* Pint Hollow Square Pattern:

               *****
               *   *
               *   *
               *   *
               *****

*/

function printHollowSquarePattern(rows = 9) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 0 || i === rows - 1) {
        pattern += '*';
      } else {
        if (j == 0 || j === rows - 1) {
          pattern += '*';
        } else {
          pattern += ' ';
        }
      }
    }
    pattern += '\n';
  }
  return pattern;
}
console.log(printHollowSquarePattern());

/* Print Hollow Triangle:

                 *
              *   *
            *       *
          *           *
        * * * * * * * * *

*/

function printHollowTriangle(rows = 5) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = i + 1; j < rows; j++) {
      pattern += '  ';
    }
    pattern += '* ';
    for (let k = 0; k < 2 * i - 1; k++) {
      if (i === rows - 1) {
        pattern += '* ';
      } else {
        pattern += '  ';
      }
    }
    if (i !== 0) pattern += '* ';
    pattern += '\n';
  }

  return pattern;
}

console.log(printHollowTriangle());

/* Print Alternating Binary Triangle:

                  1
                  0 1
                  1 0 1
                  0 1 0 1
                  1 0 1 0 1

*/

function getBinaryTriangle(rows = 5) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i + 1; j++) {
      if ((j + i) % 2 == 0) {
        pattern += 1 + ' ';
      } else {
        pattern += 0 + ' ';
      }
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(getBinaryTriangle());

/* Print Hollow Inverted Pyramid:

           * * * * * * * * *
             *           *
               *       *
                 *   *
                   *
*/

function getHolloInvertedPyramid(rows = 10) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      pattern += '  ';
    }
    pattern += '* ';
    for (let k = 0; k < 2 * (rows - i) - 3; k++) {
      if (i === 0) pattern += '* ';
      else pattern += '  ';
    }
    if (i !== rows - 1) pattern += '* ';
    pattern += '\n';
  }
  return pattern;
}
console.log(getHolloInvertedPyramid());

/* Butterfly Pattern:
 *               *
 * *           * *
 * * *       * * *
 * * * *   * * * *
 * * * * * * * * *
 * * * *   * * * *
 * * *       * * *
 * *           * *
 *               *
 */

function butterflyPattern(n = 5) {
  const upperPattern = butterflyUpperPattern(n);
  const bottomPattern = butterflyBottomPattern(n);
  return upperPattern + bottomPattern;
}

function butterflyUpperPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    /* print stars */
    for (let j = 0; j < i + 1; j++) {
      pattern += '* ';
    }
    /* print spaces */
    for (let k = 0; k < 2 * (n - i) - 3; k++) {
      pattern += '  ';
    }
    /* print stars */
    for (let l = 0; l < i + 1; l++) {
      if (i == n - 1 && l === i) continue;
      pattern += '* ';
    }
    pattern += '\n';
  }

  return pattern;
}

function butterflyBottomPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n - 1; i++) {
    /* print stars */
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '* ';
    }
    /* print spaces */
    for (let k = 0; k <= 2 * i; k++) {
      pattern += '  ';
    }
    /* print stars */
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(butterflyPattern());

/* Diamond Pattern:
 *
 * * *
 * * * * *
 * * * * * * *
 * * * * * * * * *
 * * * * * * *
 * * * * *
 * * *
 *
 */

function printDiamondPattern(n = 5) {
  const upperPattern = upperDiamondPattern(n);
  const bottomPattern = bottomDiamondPattern(n);
  return upperPattern + bottomPattern;
}

function upperDiamondPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    /* print spaces */
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '  ';
    }
    /* print stars */
    for (let k = 0; k < i + 1; k++) {
      pattern += '* ';
    }
    /* print stars again: */
    for (let l = 0; l < i; l++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}
function bottomDiamondPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n - 1; i++) {
    /* print spaces: */
    for (let j = 0; j < i + 1; j++) {
      pattern += '  ';
    }
    /* print stars: */
    for (let k = 0; k < n - i - 1; k++) {
      pattern += '* ';
    }
    for (let l = 0; l < n - i - 2; l++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(printDiamondPattern((n = 5)));

/* Print Hourglass Pattern:
                               * * * * * * * * *
                                 * * * * * * *
                                   * * * * *
                                     * * *
                                       *
                                     * * *
                                   * * * * *
                                 * * * * * * *
                               * * * * * * * * *
 */

function printHourglassPattern(n = 5) {
  const upperPattern = printHourglassUpperPattern(n);
  const bottomPattern = printHourglassBottomPattern(n);
  return upperPattern + bottomPattern;
}

console.log(printHourglassPattern());

function printHourglassUpperPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    /* print spaces: */
    for (let k = 0; k < i; k++) {
      pattern += '  ';
    }
    /* print stars: */
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      pattern += '* ';
    }

    pattern += '\n';
  }
  return pattern;
}

function printHourglassBottomPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 2; j++) {
      pattern += '  ';
    }
    for (let k = 0; k < 2 * i + 3; k++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}
