function solution(X, A) {
  // get make sum of X (with prev numbers)
  let sumX = Array(X + 1)
    .fill(null)
    .reduce((acc, next, idx) => {
      return (acc += idx);
    }, 0);
  // track visited leafs
  const visited = {};

  // loop while collect [1,2,3,4,5]
  for (const [idx, num] of A.entries()) {
    if (!visited[num]) {
      visited[num] = true;
      sumX -= num;
      if (sumX === 0) {
        return idx;
      }
    }

    if (idx === A.length - 1 && sumX !== 0) {
      return -1;
    }
  }
}

const testX = 5;
const testA = [1, 3, 1, 4, 2, 3, 5, 4];
console.log(solution(testX, testA));
