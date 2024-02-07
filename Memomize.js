// Memoize is function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};

  return function (...args) {
    //this is make ...args to string
    const key = args
      .map((arg) => {
        if (typeof arg === "function") {
          // If argument is a function, stringify its source code
          return arg.toString();
        } else {
          // Otherwise, use default string conversion
          return String(arg);
        }
      })
      .join(",");
    //  console.log(key);

    if (key in cache) {
      return cache[key];
    }

    console.log(cache);

    //this is will store in cache and run function factories
    cache[key] = fn(...args);
    return cache[key];
  };
}

//Function for count cache happened
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
memoizedFn("List Name of my cats", "Ciko, Ciki, Coki"); // List Name of my catsCiko, Ciki, Coki
memoizedFn("List Name of my cats", "Ciko, Ciki, Coki"); // List Name of my catsCiko, Ciki, Coki

memoizedFn(3, 4);
memoizedFn(3, 5);

console.log(callCount); // 4 -> this is prove is cache works
