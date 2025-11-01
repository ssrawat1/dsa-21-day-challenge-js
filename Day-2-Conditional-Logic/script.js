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

/* Check if a Number is +ve , -ve or zero: 
 Approach: if we divide any number by 1 then we get the +ve if it is greater than 0 and if this is not a case then we get either 0 or -ve numbers right so let's convert this approach into code
*/

function checkNum(n) {
  if (typeof n !== 'number') {
    throw Error('argument is not valid');
  }

  return n / 1 > 1 ? 'Positive' : n / 1 < 0 ? 'Negative' : 'Zero';
}

console.log(checkNum(-2 / 1));




