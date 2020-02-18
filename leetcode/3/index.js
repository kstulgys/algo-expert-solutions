var lengthOfLongestSubstring = function(s) {
  let array = s.split('')
  let longest = array.length === 1 ? 1 : 0

  array.forEach((l, i) => {
    let newArray = array.slice(i)
    let tempLongest = 0
    let tempHash = {}

    for (let [idx, el] of newArray.entries()) {
      if (tempHash[el]) {
        longest = Math.max(tempLongest, longest)
        break
      }
      tempHash[el] = true
      tempLongest++
      if (newArray.length - 1 === idx) {
        longest = Math.max(tempLongest, longest)
        break
      }
    }
  })

  return longest
}

const test = 'au'
console.log(lengthOfLongestSubstring(test))
