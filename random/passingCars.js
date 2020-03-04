function solution(A) {
  let countZeros = 0;
  let countPass = 0;

  for (let el of A) {
    if (el === 0) {
      countZeros++;
    }
    if (el === 1) {
      countPass += countZeros;
    }
    if (countPass > 1e9) {
      return -1;
    }
  }

  return countPass;
}

let A = [];
A[0] = 0;
A[1] = 1;
A[2] = 0;
A[3] = 1;
A[4] = 1;

console.log(solution(A));
