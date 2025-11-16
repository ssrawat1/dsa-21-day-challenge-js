/***********************************************************
                Print Right Angled Star Triangle
    Input: rows = 5
    Output:
                *
                * *
                * * *
                * * * *
                * * * * *
    
    Print a right-angled triangle pattern using stars.
    Each row contains increasing number of stars.
***********************************************************/

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

/***********************************************************
            Print Inverted Right Angled Triangle
    Input: rows = 5
    Output:
                * * * * *
                * * * *
                * * *
                * *
                *
    
    Print an inverted right-angled triangle pattern.
    Each row contains decreasing number of stars.
***********************************************************/

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

/***********************************************************
                    Print Pyramid Pattern
    Input: rows = 5
    Output:
                    *
                  * * *
                * * * * *
              * * * * * * *
            * * * * * * * * *
    
    Print a symmetric pyramid using stars with proper spacing.
    Stars increase on both sides as we go down.
***********************************************************/

function printPyramidPattern(rows = 5) {
  let pattern = '';
  for (let i = 0; i < rows; i++) {
    for (let j = i + 1; j < rows; j++) {
      pattern += '  ';
    }
    for (let k = 0; k < i + 1; k++) {
      pattern += '* ';
    }
    for (let c = 0; c < i; c++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(printPyramidPattern());

/***********************************************************
                  Print Inverted Pyramid
    Input: rows = 5
    Output:
             * * * * * * * * *
               * * * * * * *
                 * * * * *
                   * * *
                     *
    
    Print an inverted symmetric pyramid with stars.
    Stars decrease as we go down, moving towards center.
***********************************************************/

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

/***********************************************************
              Print Hollow Square Pattern
    Input: rows = 5
    Output:
                * * * * *
                *       *
                *       *
                *       *
                * * * * *
    
    Print a hollow square with stars on borders only.
    Top, bottom, left, and right edges are filled.
***********************************************************/

function printHollowSquarePattern(rows = 5) {
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

/***********************************************************
               Print Hollow Triangle
    Input: rows = 5
    Output:
                     *
                   *   *
                 *       *
               *           *
             * * * * * * * * *
    
    Print a hollow triangle with stars on edges only.
    Top vertex and base are filled, sides are hollow.
***********************************************************/

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

/***********************************************************
            Print Alternating Binary Triangle
    Input: rows = 5
    Output:
                    1
                    0 1
                    1 0 1
                    0 1 0 1
                    1 0 1 0 1
    
    Print a triangle with alternating 0s and 1s.
    Pattern alternates based on position sum (i+j).
***********************************************************/

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

/***********************************************************
              Print Hollow Inverted Pyramid
    Input: rows = 5
    Output:
                 * * * * * * * * *
                   *           *
                     *       *
                       *   *
                         *
    
    Print an inverted pyramid with hollow interior.
    Only edges are filled, inside is empty.
***********************************************************/

function getHollowInvertedPyramid(rows = 5) {
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

console.log(getHollowInvertedPyramid());

/***********************************************************
                    Print Butterfly Pattern
    Input: n = 5
    Output:
                    *               *
                    * *           * *
                    * * *       * * *
                    * * * *   * * * *
                    * * * * * * * * *
                    * * * *   * * * *
                    * * *       * * *
                    * *           * *
                    *               *
    
    Print a butterfly shape with two symmetric wings.
    Upper half mirrors, middle meets, lower half mirrors again.
***********************************************************/

function butterflyPattern(n = 5) {
  const upperPattern = butterflyUpperPattern(n);
  const bottomPattern = butterflyBottomPattern(n);
  return upperPattern + bottomPattern;
}

function butterflyUpperPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += '* ';
    }
    for (let k = 0; k < 2 * (n - i) - 3; k++) {
      pattern += '  ';
    }
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
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '* ';
    }
    for (let k = 0; k <= 2 * i; k++) {
      pattern += '  ';
    }
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(butterflyPattern());

/***********************************************************
                    Print Diamond Pattern
    Input: n = 5
    Output:
                        *
                      * * *
                    * * * * *
                  * * * * * * *
                * * * * * * * * *
                  * * * * * * *
                    * * * * *
                      * * *
                        *
    
    Print a diamond shape by combining upper and lower patterns.
    Expands then contracts symmetrically.
***********************************************************/

function printDiamondPattern(n = 5) {
  const upperPattern = upperDiamondPattern(n);
  const bottomPattern = bottomDiamondPattern(n);
  return upperPattern + bottomPattern;
}

function upperDiamondPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '  ';
    }
    for (let k = 0; k < i + 1; k++) {
      pattern += '* ';
    }
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
    for (let j = 0; j < i + 1; j++) {
      pattern += '  ';
    }
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

console.log(printDiamondPattern());

/***********************************************************
                  Print Hourglass Pattern
    Input: n = 5
    Output:
                   * * * * * * * * *
                     * * * * * * *
                       * * * * *
                         * * *
                           *
                         * * *
                       * * * * *
                     * * * * * * *
                   * * * * * * * * *
    
    Print an hourglass shape with wider top and bottom,
    narrower middle. Perfect vertical symmetry.
***********************************************************/

function printHourglassPattern(n = 5) {
  const upperPattern = printHourglassUpperPattern(n);
  const bottomPattern = printHourglassBottomPattern(n);
  return upperPattern + bottomPattern;
}

function printHourglassUpperPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
      pattern += '  ';
    }
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

console.log(printHourglassPattern());

/***********************************************************
               Print Hollow Diamond Pattern
    Input: n = 5
    Output:
                        *
                      *   *
                    *       *
                  *           *
                *               *
                  *           *
                    *       *
                      *   *
                        *
    
    Print a diamond shape with hollow interior.
    Only the outline is visible.
***********************************************************/

function printHollowDiamondPattern(n = 5) {
  const upperPattern = hollowDiamondUpperPattern(n);
  const bottomPattern = hollowDiamondBottomPattern(n);
  return upperPattern + bottomPattern;
}

function hollowDiamondUpperPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '  ';
    }
    pattern += '* ';
    for (let k = 0; k < 2 * i - 1; k++) {
      pattern += '  ';
    }
    if (i > 0) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

function hollowDiamondBottomPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += '  ';
    }
    pattern += '* ';
    for (let k = 0; k < 2 * (n - 1 - i) - 3; k++) {
      pattern += '  ';
    }
    if (i < n - 2) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(printHollowDiamondPattern());

/***********************************************************
                  Print Rhombus Pattern
    Input: n = 5
    Output:
                     * * * *
                   * * * *
                 * * * *
               * * * *
             * * * *
    
    Print a rhombus (slanted square) shape.
    Each row has same number of stars but shifts right.
***********************************************************/

function printRhombusPattern(n = 5) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '  ';
    }
    for (let k = 0; k < n; k++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

console.log(printRhombusPattern());

/***********************************************************
          Print Multiplication Table (Single and Upto N)
    Input: n = 5
    Output:
                    1*1 = 1
                    1*2 = 2
                    ...
                    2*1 = 2
                    ...
    
    Print multiplication tables for numbers 1 to n.
    Each table shows multiples from 1 to 10.
***********************************************************/

function printNumberMultiplicationUptoN(n = 5) {
  for (let i = 1; i <= n; i++) {
    let table = '';
    for (let j = 1; j <= 10; j++) {
      table += `${i}*${j} = ${i * j} \n`;
    }
    console.log(table);
  }
}

console.log(printNumberMultiplicationUptoN());