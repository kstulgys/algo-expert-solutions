function getNumOfSwapsToSort(array) {
  let sorted = [...array].sort((a, b) => a - b)
  // sorted
  let swaps = 0

  function swap() {
    let currentSwaps = 0
    array.forEach((el, i) => {
      if (array.length - 1 === i && currentSwaps !== 0) {
        swap()
      } else if (el !== sorted[i]) {
        let idx = sorted.indexOf(el)
        let temp = array[idx]
        array[idx] = el
        array[i] = temp
        swaps++
        currentSwaps++
      }
    })
  }

  swap()

  return swaps
}

const testArray2 = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5]
const testArray = [7, 1, 3, 5, 2, 4, 6]
//

console.log(getNumOfSwapsToSort(testArray2))
