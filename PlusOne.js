// Plus One is add +1 for num in array
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //this looping reverse
  for (let i = digits.length - 1; i >= 0; i--) {
    // console.log(i);
    if (digits[i] < 9) {
      digits[i]++;
      return digits; //this will stop after 9 number
    }
    digits[i] = 0;
  }

  //this will add one for array if end looping
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([2, 2, 9]));
console.log(plusOne([9]));
console.log(plusOne([9, 5, 4, 9]));
console.log(plusOne([9, 6, 5, 9, 9]));
console.log(plusOne([9, 9, 9, 9, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
