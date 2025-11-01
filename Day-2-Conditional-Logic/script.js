/* Find the maximum of Three numbers:
   Approach: it is about 3 numbers right so let compare the first two number and then keep the max one and compare it with third one to get max.
*/

function getThreeNumMax(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw Error('error: invalid arguments');
  }
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

console.log(getThreeNumMax(-1, -2, -3));
