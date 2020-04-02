/***
 * https://leetcode.com/problems/rotate-image/
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 */
const rotate = matrix => {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      const temp = matrix[j][i]
      matrix[j][i] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
    }
  }
  return matrix
}

console.log(rotate([[1, 2, 3, 3.1], [4, 5, 6, 6.1], [7, 8, 9, 9.1], [13, 14, 15, 16]]))
