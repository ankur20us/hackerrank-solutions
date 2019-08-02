function isValid (s) {
  const countMap = {}; const countList = []
  const arr = s.split('')
  arr.forEach((a) => { countMap[a] = (countMap[a] || 0) + 1 })
  Object.keys(countMap).forEach(k => countList.push(countMap[k]))
  countList.sort()
  const countSet = new Set(countList)

  const len = countList.length

  if (countSet.size > 2) {
    return 'NO'
  } else if (countSet.size === 1) {
    return 'YES'
  } else if (countSet.size === 2) {
    const firstNum = countList[0]; const lastNum = countList[len - 1]
    const lastList = countList.slice(1); const firstList = countList.slice(0, len - 1)
    const lastListSet = new Set(lastList); const firstListSet = new Set(firstList)
    return (
      (lastListSet.size === 1 && firstNum === 1) ||
      (lastListSet.size === 1 && lastNum - firstNum === 1) ||
      (firstListSet.size === 1 && lastNum - firstNum === 1)
    )
      ? 'YES' : 'NO'
  }
}
