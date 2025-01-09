// Note rule of calculation binary
// 0 + 0 = 0
// 1 + 0 = 1 -> this also for vise versa
// 1 + 1 = 10
// 1 + 1 + 1 = 11
// 11 + 1 = 100

var addBinary = function(a, b) {
   let m = a.length;
   let n = b.length;
   
   let addition = 0
   let res = ''
   
   for(let i = m - 1, j = n - 1; i >= 0 || j >= 0; i--, j--) {
       let sum = (+a[i] || 0) + (+b[j] || 0) + addition
       res = (sum % 2) + res
       addition = sum > 1 ? 1 : 0
   }
   
   if(addition) res = '1' + res
   return res
};

console.log(addBinary("11", "1"))//100
console.log(addBinary("1", "101"))//110
console.log(addBinary("1010", "1011"))//10101
