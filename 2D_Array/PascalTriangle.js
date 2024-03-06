const pascalTriangle = function (numRows) {
  let res = [];

  if (numRows >= 1) {
    res.push([1]);
  }
  if (numRows >= 2) {
    res.push([1, 1]);
  }

  for (let i = 2; i < numRows; i++) {
    let first = 1;
    let last = 1;

    let prevArr = res[i - 1];

    //this for urutan ke tiga
    if (prevArr.length === 2) {
      res.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let add = [];

      while (right < prevArr.length) {
        add.push(prevArr[left] + prevArr[right]);
        right++;
        left++;
      }

      res.push([first, ...add, last]);
    }
  }

  return res;
};

console.log(pascalTriangle(5)); //[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
