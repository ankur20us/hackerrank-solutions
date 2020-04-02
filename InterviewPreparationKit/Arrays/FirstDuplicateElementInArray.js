/**
 * Given an array of n elements which contains elements from 1 to n,
 * with any of these numbers appearing any number of times.
 * Find these repeating numbers in O(n) and using only constant memory space.
 */

/**
 *
 * We are going to make the element at a[Abs[a[i]]] to negative everytime if its positive,
 * so if we face the state where we get negative number that means it was already traversed.
 */
const find = (array) => {
  const result = []
  for (let i = 0, len = array.length; i < len; i += 1) {
    array[Math.abs(array[i]) - 1] > 0
      ? array[Math.abs(array[i]) - 1] = -array[Math.abs(array[i]) - 1]
      : result.push(Math.abs(array[i]))
    console.log(Math.abs(array[i]), array[Math.abs(array[i])])
  }

  return result
}

console.log(find([3, 2, 3, 7, 5, 5, 6, 6, 7]))
