function solution(A) {
  let table = {};
  A.forEach((el, i) => {
    if (Math.sign(el) !== -1) {
      table[el] = true;
    }
  });

  let array = Object.keys(table);
  if (!array.length || array[0] - 1 >= 1) {
    return 1;
  }

  for (const [i, el] of array.entries()) {
    let elNum = Number(el);

    if (i !== array.length - 1) {
      if (Number(array[i + 1]) !== elNum + 1) {
        return elNum + 1;
      }
    } else {
      return elNum + 1;
    }
  }
}

const test = [1, 3, 6, 4, 1, 2];
// const test = [4, 5, 6, 2];
// const test = [-1, 3, 1];
// const test = [1, 2, 3];
// const test = [-1, -3];
// let test = [90, 91, 92, 93];

console.log(solution(test));
