// Pivot Index is find same value of sum left and right

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sumLeft = 0;
  //sum all element
  let sumRight = nums.reduce((acc, cur) => acc + cur);

  //looping and compare
  for (let i = 0; i < nums.length; i++) {
    // decrese total array
    sumRight -= nums[i];

    if (sumLeft === sumRight) return i;

    //add sumLeft with current i(index)
    sumLeft += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));//3
console.log(pivotIndex([1, 8, 3, 2, 4, 6]));//-1
