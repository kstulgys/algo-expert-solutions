var isValid = function(s) {
  let stack = []

  let hashMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let array = s.split('')

  for (let [idx, val] of array.entries()) {
    if (hashMap[val]) {
      stack.push(val)
    } else if (stack.length === 0 || val != hashMap[stack.pop()]) {
      return false
    }
  }

  return stack.length == 0
}
const test = '{(){}[]}'
console.log(isValid(test))
