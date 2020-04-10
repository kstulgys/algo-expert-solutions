function longestSum(array) {
  let currentSum = 0;
  let globalSum = 0;

  array.forEach((el, i) => {
    currentSum = Math.max(0, currentSum + el);
    globalSum = Math.max(globalSum, currentSum);
  });

  return globalSum;
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(longestSum(array));
