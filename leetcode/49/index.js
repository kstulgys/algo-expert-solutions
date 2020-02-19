var groupAnagrams = function(strs) {
  let hash = {}

  strs.forEach((str, i) => {
    let key = str
      .split('')
      .sort()
      .join('')

    if (!hash[key]) {
      hash[key] = [strs[i]]
    } else {
      hash[key] = [...hash[key], strs[i]]
    }
  })

  return Object.values(hash)
}

const test = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(test))
