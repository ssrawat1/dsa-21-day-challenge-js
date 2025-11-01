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

/* Calculate Electricity Bill :
   0-100 units -> Rs 5
   101-200 units -> Rs 7
   201-300 units -> Rs 10
  Above 300 units -> RS 12
 */

function getElectricityBill(unit) {
  let bill = 0;
  let billCycle = 100;
  if (unit >= 0 && unit <= 100) {
    let charge = 5;
    bill = unit * charge;
  } else if (unit >= 101 && unit <= 200) {
    let charge = 7;
    let left = unit - billCycle;
    bill = billCycle * 5 + left * charge;
  } else if (unit >= 201 && unit <= 300) {
    let charge = 10;
    let left = unit - billCycle * 2;
    bill = billCycle * 5 + billCycle * 7 + left * charge;
  } else {
    let charge = 12;
    let left = unit - billCycle * 3;
    bill = billCycle * 5 + billCycle * 7 + billCycle * 10 + left * charge;
  }
  return bill >= 0 ? bill : 'not valid unit';
}

console.log(getElectricityBill(230));

/* Check if a Character is Vowel or Consonant */

function isVowel(c) {
  if (!c || typeof c !== 'string') throw new Error('invalid argument');

  const char = c.toLowerCase();

  if (char === 'a' || char === 'e' || char === 'i' || char === '0' || char === 'u') {
    return 'Vowel';
  } else {
    return 'Consonant';
  }
}

console.log(checkCharacter('A'));

/* Check if a Year is a Leap Year: */


