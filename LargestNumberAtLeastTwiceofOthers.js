// In here we shoud find big number than other numbers even double/2* than other numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxNumIndex = 0; // Initialize maxNumIndex with 0 (the first element index)

  // Find max num index
  for (let i = 1; i < nums.length; i++) {
    if (nums[maxNumIndex] < nums[i]) {
      maxNumIndex = i; // Update maxNumIndex if a larger element is found
    }
  }

  // Check if the element at maxNumIndex is dominant
  for (let j = 0; j < nums.length; j++) {
    if (j !== maxNumIndex && nums[maxNumIndex] < nums[j] * 2) {
      return -1; // If not dominant, return -1
    }
  }

  return maxNumIndex; // Return the dominant index
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([0, 0, 0, 1]));
