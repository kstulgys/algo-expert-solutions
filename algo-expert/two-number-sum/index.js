function twoNumberSum(array, sum) {
  let hash = {}

  for (element of array) {
    const potentialMatch = sum - element

    if (hash[potentialMatch]) {
      return [potentialMatch, element]
    } else {
      hash[element] = true
    }
  }

  return []
}

const array = [3, 5, -4, 8, 11, 1, -1, 6]
const sum = 10

console.log(getTwoNumbers(array, sum))
