const moveZeroes = function(nums) {
    let left = 0;
    let right = 0;
    
    while(right < nums.length) {
        if(nums[right] !== 0) {
            // swapping
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            // this is modern swapping like above
            // [nums[left], nums[right]] = [nums[right], nums[left]]
            
            left++
        }
        
        right++
    }
    
    return nums
}

console.log(moveZeroes([0, 1, 3, 12, 0]))
console.log(moveZeroes([0, -1, 8, 23, 0]))
