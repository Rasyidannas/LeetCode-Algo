/**
 * @params {Function} fn
 * @params {number} t
 * return {Function}
 */

// Throttle is make a delay when you call more than one with limit time and will cancelled previous call. Then will execute the last call
var throttle = function (fn, t) {
  let isThrottled = false;
  let nextArgs;

  function helper() {
    if (nextArgs) {
      fn(...nextArgs);
      isThrottled = true;
      nextArgs = null;
      setTimeout(helper, t);
    } else {
      isThrottled = false;
    }
  }

  return function (...args) {
    if (isThrottled) {
      nextArgs = args;
    } else {
      fn(...args);
      isThrottled = true;
      setTimeout(helper, t);
    }
  };
};

const throttled = throttle(console.log, 2000);
throttled("log"); //this will execute immediatley
setTimeout(() => throttled("log2"), 2000); //this will execute because this wait 2000 like delay of throttle
throttled("log3"); // cancelled because the last
throttled("log4"); //this execute in 200ms
