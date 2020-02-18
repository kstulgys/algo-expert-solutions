var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false
  }
  let tArray = t.split('')

  for (let l of s) {
    const idx = tArray.indexOf(l)
    if (idx != -1) {
      tArray.splice(idx, 1)
    }
  }

  return tArray.length === 0
}

const test1 = 'anagram'
const test2 = 'nagaram'
console.log(isAnagram(test1, test2))
