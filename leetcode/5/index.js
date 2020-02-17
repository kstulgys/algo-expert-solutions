var longestPalindrome = function(s) {
  let longest = ''
  let array = s.split('')

  array.forEach((el, i) => {
    let around = expandAroundCenter(array, i - 1, i + 1)
    let between = expandAroundCenter(array, i, i + 1)

    if (around.length > longest.length) {
      longest = around
    }
    if (between.length > longest.length) {
      longest = between
    }
  })

  return longest

  function expandAroundCenter(array, left, right) {
    while (left >= 0 && right < array.length && array[left] === array[right]) {
      left -= 1
      right += 1
    }

    let str = s.substring(left + 1, right)
    return str
  }
}

let test = 'abadd'

console.log(longestPalindrome(test))
