var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    let sum = 0
    
    for (let i = 0; i < nums.length; i+=2) {
        sum += nums[i]
    }
   
   return sum
}

console.log(arratPairSum([1,2,3,4]))
console.log(arrayPairSum([6,2,6,5,1,2]))
