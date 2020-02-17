const maxSubArray = nums => {
  let maxCurrent = nums[0]
  let maxGlobal = nums[0]

  nums.forEach((el, i) => {
    if (i !== 0) {
      if (maxCurrent < el) {
        maxCurrent = el
      } else {
        maxCurrent += el
      }
    }

    maxGlobal = Math.max(maxCurrent, maxGlobal)
  })

  return maxGlobal
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// const array = [-1, 0, -2]

console.log(maxSubArray(array))
