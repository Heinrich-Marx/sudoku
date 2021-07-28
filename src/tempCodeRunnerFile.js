
function solveSudoku(matrix) {
  for (let i = 0; i<matrix.length;i++) {
    let arr = [1,2,3,4,5,6,7,8,9]
    for (let j = 0; j<matrix[i].length; j++) {
      if (matrix[i][j]==0) {
        matrix[i].splice(j,1,arr[0])
        arr.splice(0,1)
      }
    }
  }
  for (let i = 0; i<matrix.length;i++) {
    let arr = [1,2,3,4,5,6,7,8,9]
    for (let j = 0;j<matrix[i].length;j++) {
      if (arr.includes(matrix[i][j])) {
        let num = arr.indexOf(matrix[i][j])
        arr.splice(num,1)
      }
      else  {
        let num = matrix[i].indexOf(matrix[i][j])
        matrix[i].splice(num,1,arr[0])
        arr.splice(0,1)
      }
    }
  }
  console.log(matrix);
}

solveSudoku([
  [0, 0, 0, 9, 3, 8, 0, 4, 0],
  [0, 0, 0, 7, 6, 0, 0, 0, 2],
  [7, 4, 0, 5, 0, 0, 0, 8, 0],
  [8, 0, 0, 6, 7, 5, 0, 1, 3],
  [0, 7, 0, 3, 0, 2, 8, 0, 0],
  [3, 2, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 6, 3, 2, 0],
  [0, 5, 0, 4, 0, 0, 0, 0, 0],
  [1, 0, 6, 2, 0, 0, 0, 5, 0] 
]
)