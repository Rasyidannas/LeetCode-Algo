//flatArray is do flatten array or remove nested array based number
const flatArray = function (arr, n) {
  let res = [];

  function helper(arr, depth) {
    for (const val of arr) {
      if (Array.isArray(val) && depth < n) {
        helper(val, depth + 1);
      } else {
        res.push(val);
      }
    }
    return res;
  }

  return helper(arr, 0);
};

console.log(
  flatArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
