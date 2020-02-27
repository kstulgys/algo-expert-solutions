function solution(A) {
  let visited = {};

  for (let [idx, val] of A.entries()) {
    if (Math.sign(val) !== -1 && Math.sign(val) !== 0) {
      visited[val] = true;
    }
  }

  let keys = Object.keys(visited);

  for (let [i, k] of keys.entries()) {
    if (i === 0 && k > 1) {
      return 1;
    }
    let currentNum = Number(k);
    let betweenNum = currentNum + 1;
    let nextNum = Number(keys[i + 1]);

    if (betweenNum > 1 && betweenNum !== nextNum) {
      return betweenNum;
    }
  }

  return 1;
}

const test = [1, 10, 3, 6, 4, 1, 2, 0];
const test2 = [0, 2, 3];
const test3 = [-1, -3];

console.log(solution(test3));
