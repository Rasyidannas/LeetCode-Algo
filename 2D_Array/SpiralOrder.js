
const spiralOrder = (matrix) => {
   let left = 0;
   let top = 0;
   let right = matrix[0].length - 1;
   let bottom = matrix.length - 1;

   let size = matrix.length * matrix[0].length;
   let nums = [];
   
   while(nums.length < size) {
       // this for top with direct ->
       for(let i = left; i <= right; i++) {
           nums.push(matrix[top][i])
       }
       top++ // this for mark top looped
       
       // this for right with direct v
       for(let i = top; i <= bottom && nums.length < size; i++) {
           nums.push(matrix[i][right])
       }
       right-- // this for mark right looped 
       
       // this for bottom with direct <
       for(let i = right; i >= left && nums.length < size; i--) {
           nums.push(matrix[bottom][i])
       }
       bottom-- // this for mark bottom looped 
       
       // this for left with direct ^/up
       for(let i = bottom; i >= top && nums.length < size; i--) {
           nums.push(matrix[i][left])
       }
       left++ // this for mark left looped 
   }
   return nums;
}

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])) //[1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) //[1,2,3,6,9,8,7,4,5]