// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
   for(let i = 0; i < haystack.length; i++) {
       let k = i;
       let j = 0;
       
       while(haystack[k] === needle[j] && j < needle.length) {
           k++
           j++
       }
       
       if(j === needle.length) {
           return i
       }
   }
   
   return -1
}

console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))
console.log(strStr("mississippi", "issip"))