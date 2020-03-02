function fn(array) {
  return array.sort((a, b) => a - b);
}

const test = [3, 2, 2, 1, 5, 10];

console.log(fn(test));
