/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const res = {};

  for (const obj of this) {
    //this will execute every element with function inputed
    const key = fn(obj);

    //this is for add an array in res | {[]}
    res[key] = res[key] || [];
    //this same like above
    // if (!res.hasOwnProperty(key)) {
    //   res[key] = [];
    // }

    //this is for add element for above array
    res[key].push(obj);
  }

  return res;
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy((n) => String(n > 5))); //{"true": [6, 7, 8, 9, 10], "false": [1, 2, 3, 4, 5]}
