module.exports = function solveSudoku(matrix) {
  // for (let i = 0; i<matrix.length; i++) {
  //   let arr = [1,2,3,4,5,6,7,8,9,0]
  //   let arr2 = [1,2,3,4,5,6,7,8,9,0]
  //   for (let j = 0; j<matrix[i].length;j++) {
  //     if (matrix[i][j] == 0) {
  //       matrix[i].splice(j,1,arr[0])  
  //       arr.splice(0,1)
  //       if (matrix[j][i] == 0) {
  //         matrix[j].splice(j,1,arr2[0])
  //         arr2.splice(0,1)
  //       }
  //     }
  //     if (arr.includes(matrix[i][j])) {
  //       let a = arr.indexOf(matrix[i][j])
  //       arr.splice(a,1)
  //       if (arr2.includes(matrix[j][i])) {
  //         let q = arr2.indexOf(matrix[j][i])
  //         arr2.splice(q,1)
  //       }
  //     }
  //     else {
  //       let b = matrix[i].indexOf(matrix[i][j])
  //       matrix[j].splice(b,1,arr[0])
  //       if (!arr2.includes(matrix[j][i])) {
  //         let q = matrix[j].indexOf(matrix[j][i])
  //         matrix[j].splice(q,1,arr2[0])
  //       }
  //     }
  //   }
  // }
  //  return matrix
}

// function solveSudoku(matrix) {
//   for (let i = 0; i<matrix.length; i++) {
//     let arr = [1,2,3,4,5,6,7,8,9,9]
//     let arr2 = [1,2,3,4,5,6,7,8,9,9]
//     for (let j = 0; j<matrix[i].length;j++) {
//       if (matrix[i][j] == 0) {
//         matrix[i].splice(j,1,arr[0])  
//         arr.splice(0,1)
//         if (matrix[j][i] == 0) {
//           matrix[j].splice(j,1,arr2[0])
//           arr2.splice(0,1)
//         }
//       }
//       if (arr.includes(matrix[i][j])) {
//         let a = arr.indexOf(matrix[i][j])
//         arr.splice(a,1)
//         if (arr2.includes(matrix[j][i])) {
//           let q = arr2.indexOf(matrix[j][i])
//           arr2.splice(q,1)
//         }
//       }
//       else {
//         let b = matrix[i].indexOf(matrix[i][j])
//         matrix[i].splice(b,1,arr[0])
//         if (!arr2.includes(matrix[j][i])) {
//           let q = matrix[i].indexOf(matrix[j][i])
//           matrix[j].splice(q,1,arr2[0])
//         }
//       }
//     }
//   }
//    console.log(matrix);
// }
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


solveSudoku([
  [6, 5, 0, 7, 3, 0, 0, 8, 0],  //  [6, 5, 1, 7, 3, 2, 3, 8, 4] 
  [0, 0, 0, 4, 8, 0, 5, 3, 0],  //  [1,2,3,4,8,5,6,7,9]  [,,,,,,7,,9] j=6
  [8, 4, 0, 9, 2, 5, 0, 0, 0],  //  [8, 4, 2, 9, 2, 5, 0, 6, 7]
  [0, 9, 0, 8, 0, 0, 0, 0, 0],  //  [0, 9, 2, 8, 3, 4, 5, 6, 1]
  [5, 3, 0, 2, 0, 9, 6, 0, 0],  //  [5, 3, 2, 2, 1, 9, 6, 0, 8]
  [0, 0, 6, 0, 0, 0, 8, 0, 0],  //  [1, 8, 6, 3, 4, 5, 2, 2, 7]
  [0, 0, 9, 0, 0, 0, 0, 0, 6],  //  [2, 6, 9, 7, 4, 5, 2, 6, 3]
  [0, 0, 7, 0, 0, 0, 0, 5, 0],  //  [6, 2, 7, 3, 4, 5, 6, 6, 2]
  [1, 6, 5, 3, 9, 0, 4, 7, 0]   //  [1, 6, 4, 3, 5, 8, 4, 7, 4]
])

solveSudoku([
  [5, 3, 4, 5, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
])



// function row(matrix) {
//   for (let i = 0; i<matrix.length; i++) {
//     let arr = [1,2,3,4,5,6,7,8,9,0]
//     for (let j = 0; j<matrix[i].length;j++) {
//       if (matrix[j][i] == 0) {
//         matrix[j].splice(j,1,arr[0])  
//         arr.splice(0,1)
//       }
//       if (arr.includes(matrix[j][i])) {
//         let a = arr.indexOf(matrix[j][i])
//         arr.splice(a,1)
//         console.log(`a${a}, j${j}, i${i}`);
//       }
//       else {
//         let b = matrix[j].indexOf(matrix[j][i])
//         console.log(`a${b}, j${j}, i${i}`);
//         matrix[j].splice(b,1,arr[0])
//       }
//     }
//   }
//    console.log(matrix);
// }

solveSudoku([
  [5, 3, 4, 5, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
])



let arr = [1,2,3,4,5]
arr.splice(0,1)
console.log(arr);
