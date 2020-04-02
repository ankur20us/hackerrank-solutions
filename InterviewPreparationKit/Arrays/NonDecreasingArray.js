/**
 * Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 */

const checkPossibility = nums => {
  let count = 0
  for (let i = 1; i < nums.length && count <= 1; i += 1) {
    if (nums[i - 1] > nums[i]) {
      count += 1
      if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i]
      } else {
        nums[i] = nums[i - 1]
      }
    }
  }
  return count <= 1
}

console.log(checkPossibility([4, 2, 1])) // false
console.log(checkPossibility([4, 2, 5])) // true
