function solution(A) {
  let res;

  function sum(arr) {
    return arr.reduce((acc, next) => {
      return (acc += next);
    }, 0);
  }

  let cacheLeftSum;
  let cacheRightSum;

  A.forEach((el, i) => {
    if (typeof cacheLeftSum === "undefined") {
      cacheLeftSum = el;
    } else {
      cacheLeftSum += el;
    }

    if (typeof cacheRightSum === "undefined") {
      cacheRightSum = sum(A.slice(1, A.length));
    } else {
      cacheRightSum -= el;
    }

    let calcRes = Math.abs(cacheLeftSum - cacheRightSum);
    if (typeof res === "undefined") {
      res = calcRes;
    } else if (res > calcRes) {
      res = calcRes;
    }
  });

  return res || 0;
}

// const test = [3, 1, 2, 4, 3, 5, 10];
// const test = [];
const test = [1, 10];

console.log(solution(test));
