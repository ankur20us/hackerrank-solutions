/**
 * Given an array of integers and the targetSum find out the pair of integers from the array
 * that sums to targetSum
 *
 * 1. There will be no repeated numbers
 *
 * Example: arr = [1, 3, 5, 4, 2] then for targetSum 9 answer is YES(1)
 */
const process = (targettedSum, arr) => {
  const entryMap = {}
  for (let i = 0, len = arr.length; i < len; i++) {
    if (entryMap[targettedSum - arr[i]]) return [entryMap[targettedSum - arr[i]].index, i]
    else entryMap[arr[i]] = { val: arr[i], index: i }
  }
  return false
}

console.log(9, [1, 3, 5, 4, 2], process(9, [1, 3, 5, 4, 2])) // [3, 2] -> index 3 and 2 forms 9 (5, 4)
console.log(19, [1, 3, 5, 4, 2], process(19, [1, 3, 5, 4, 2])) // false
