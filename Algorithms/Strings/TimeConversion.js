function timeConversion (s) {
  /*
  * Write your code here.
  */
  const len = s.length
  const hString = s.substring(0, 2); const hInt = parseInt(hString, 10)
  const mString = s.substring(3, 5)
  const sString = s.substring(6, 8)
  const ampm = s.substring(len - 2)
  const result = ampm === 'PM'
    ? hInt === 12
      ? `${hInt}:${mString}:${sString}`
      : `${hInt + 12}:${mString}:${sString}`
    : hInt === 12
      ? `00:${mString}:${sString}`
      : `${hString}:${mString}:${sString}`

  return result
}
