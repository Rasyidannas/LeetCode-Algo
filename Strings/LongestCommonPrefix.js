var longestCommonPrefix = function(strs) {
   let prefix = strs[0]
   
   for(let i = 1; i < strs.length; i++) {
       // this compare next string with before string
       while(strs[i].indexOf(prefix) !== 0) {
           prefix = prefix.substring(0, prefix.length - 1)
           // console.log(prefix, strs[i])
       }
   }
   
   return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["cat","catest","carlos"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["kon","kntl","kontol"]))