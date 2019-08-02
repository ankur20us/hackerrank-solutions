// Complete the minimumNumber function below.
function minimumNumber (n, password) {
  // Return the minimum number of characters to make the password strong
  const numbers = '0123456789'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const specialCharacters = '!@#$%^&*()-+'

  const arr = password.split('')
  // [0-fn , 1-fLc, 2-fUC, 3-fSC]
  let found = [false, false, false, false]
  for (let i = 0; i < n; i++) {
    if (numbers.indexOf(arr[i]) >= 0) found[0] = true
    else if (lowerCase.indexOf(arr[i]) >= 0) found[1] = true
    else if (upperCase.indexOf(arr[i]) >= 0) found[2] = true
    else if (specialCharacters.indexOf(arr[i]) >= 0) found[3] = true
  }
  let falseCounts = 0
  found.forEach((v) => { if (!v) falseCounts++ })
  return n + falseCounts > 6
    ? falseCounts
    : 6 - n
}
