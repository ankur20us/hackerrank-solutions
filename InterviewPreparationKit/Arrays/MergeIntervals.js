/**
 * Given the input as intervals where each item is an array of 2 items that contains the intervals
 * our output should be merged interval array.
 * Consider each item of 2 values are sorted in itself i.e you will never get [[2,1]]
 * 1. Input : [[1,4],[3,8],[2,10],[11,18]]
 *    Output: [[1,10],[11,18]]
 */

/**
 * This function sorts the array with the 1st value of each sub item,
 * so like if array was [[2,10][1,9]] then 1st guy sorting will be
 * [[1,9],[2,10]]
 */
const sort = array => array.sort((a, b) => a[0] - b[0])

const process = intervals => {
  if (intervals.length <= 1) return intervals
  const resultStack = []
  intervals = sort(intervals)
  resultStack.push(intervals[0])

  /**
   * Algo is like this:
   * 1. if top element of stack has an overlapping element of next guy from the input,
   *    then change the ending value of that top elemnt of the stack,
   * 2. If not overlapping then just push it to stack, anyways our input guy is already sorted,
   *    it will make sure that we are not going to miss any interval.
   */
  for (let i = 1, len = intervals.length; i < len; i++) {
    const top = resultStack[resultStack.length - 1]
    if (top[1] < intervals[i][0]) resultStack.push(intervals[i])
    else if (top[1] < intervals[i][1]) top[1] = intervals[i][1]
  }

  return resultStack
}

console.log(process([[2, 8], [1, 4], [0, 19]]))
console.log(process([[2, 8]]))
console.log(process([]))
