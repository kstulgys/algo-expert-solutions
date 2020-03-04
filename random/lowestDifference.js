function solution(A) {
  function sum(arr) {
    return arr.reduce((acc, next) => {
      return (acc += next);
    }, 0);
  }

  let cacheLeftSum = A[0];
  let cacheRightSum = sum(A.slice(1, A.length));
  let res = Math.abs(cacheLeftSum - cacheRightSum);

  for (let i = 1; i <= A.length; i++) {
    cacheLeftSum += A[i];
    cacheRightSum -= A[i];
    let curentDiff = Math.abs(cacheLeftSum - cacheRightSum);
    if (curentDiff < res) {
      res = curentDiff;
    }
  }

  return res || 0;
}

// const test = [3, 1, 2, 4, 3, 5, 10];
const test = [];
// const test = [1, 10];

console.log(solution(test));
