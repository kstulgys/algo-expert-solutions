function solution(A) {
  if (!A.length) {
    return 1;
  }

  let hash = {};

  A.forEach((el) => {
    hash[el] = true;
  });

  let array = [...Object.keys(hash)];

  for (const [idx, val] of array.entries()) {
    let numEl = Number(val);
    if (!hash[numEl + 1] && idx !== array.length - 1) {
      return numEl + 1;
    } else if (idx === array.length - 1) {
      if (array[0] - 1 >= 1) {
        return array[0] - 1;
      } else {
        return numEl + 1;
      }
    }
  }
}

const test = [2, 3, 1, 5, 1, 4];
// const test = [3, 1, 4, 5];
// const test = [];
// const test = [2, 3, 4];

console.log(solution(test));
