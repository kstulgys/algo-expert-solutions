function solution(A) {
  let hash = {};

  A.forEach((el, idx) => {
    if (!hash[el]) {
      hash[el] = 1;
    } else if (hash[el]) {
      hash[el] = hash[el] + 1;
    }
  });

  for (const key in hash) {
    if (hash[key] % 2 !== 0) {
      return key;
    }
  }
}

let test = [9, 3, 9, 3, 9, 7, 9];
// let test = [42,2,42];

console.log(solution(test));
