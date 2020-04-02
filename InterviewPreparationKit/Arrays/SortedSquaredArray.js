/**
 * Given a sorted array you have to return the squared sorted array
 */

const squaredSortedArray = array => {
  const result = new Array(array.length)
  let i = 0
  let j = array.length - 1
  let k = array.length - 1
  while (i <= j) {
    if (Math.abs(array[i]) > Math.abs(array[j])) {
      result[k] = array[i] * array[i]
      i++
    } else {
      result[k] = array[j] * array[j]
      j--
    }
    k--
  }
  return result
}

console.log(squaredSortedArray([-11, 2, 3, 4]))
