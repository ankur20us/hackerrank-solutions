/**
 * Given two arrays of size m and n of distinct elements. Given a value x.
 * The problem is to return true/false whether or not any pair makes to x.
 */

const arrayToMap = array => array.reduce((map, val) => {
  map[val] = { val, index: Object.keys(map).length }
  return map
}, {})

const process = (firstArray, secondArray, targetValue) => {
  const firstArrayMap = arrayToMap(firstArray)
  const secondArrayMap = arrayToMap(secondArray)

  if (firstArray.length < secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (secondArrayMap[targetValue - firstArray[i]]) return true
    }
    return false
  } else {
    for (let i = 0; i < secondArray.length; i++) {
      if (firstArrayMap[targetValue - secondArray[i]]) return true
    }
    return false
  }
}

console.log(process([1, 2, 3], [4, 5, 6], 19))
