function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  let res = [];
  let arrLength = A.length;
  if (arrLength === K) {
    return A;
  }

  A.forEach((el, i) => {
    if (i + K <= A.length - 1) {
      res[i + K] = el;
    } else {
      let index = i + K - A.length;
      res.splice(index, 1, el);
    }
  });

  return res;
}

// let array = [3, 8, 9, 7, 6];
// let times = 3;

let array = [1, 2, 3, 4];
let times = 4;

// let array = [1, 2];
// let times = 1;

console.log(solution(array, times));
