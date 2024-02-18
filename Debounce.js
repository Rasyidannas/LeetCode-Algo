//Debounce it is will execute the last call function(all previous calls will be cancelled) and this used for search with realtime fetching data
var debounce = function (fn, t) {
  let id;
  return function (...args) {
    //this for clear before call
    clearTimeout(id);
    // console.log(...args) //this will access to parent argument

    id = setTimeout(() => fn(...args), t);
  };
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
