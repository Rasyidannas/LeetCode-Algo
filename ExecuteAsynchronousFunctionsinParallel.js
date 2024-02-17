/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let j = functions.length;

    //looping functions
    functions.forEach((fn, i) =>
      fn()
        .then((res) => {
          //add a element in arr
          arr[i] = res;
          // if j === 0 return this
          --j === 0 && resolve(arr);
        })
        .catch(reject)
    );
  });
};

const promise = promiseAll([
  () => new Promise((res) => res(42)),
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
]);
promise.then(console.log);

//if once error it will be Error for all
// const promise2 = promiseAll([
// () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
// () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]);
// promise2.then(console.log);
