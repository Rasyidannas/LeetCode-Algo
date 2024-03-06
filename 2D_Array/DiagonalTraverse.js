//findDiagonalOrder is print each element with diagonal up and down with square position or matrix

var findDiagonalOrder = function (mat) {
  if (mat.length === 1) return mat.flat();

  let row = mat.length;
  let col = mat[0].length;

  //create empty arrays and fill it
  let res = Array.from(Array(row + col - 1), () => new Array().fill([]));

  //Nested Looping
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //check odd or even
      if ((i + j) % 2 === 0) {
        res[i + j].unshift(mat[i][j]);
      } else {
        res[i + j].push(mat[i][j]);
      }
    }
  }

  return res.flat();
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
