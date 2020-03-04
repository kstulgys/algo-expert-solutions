function solution(A, B, K) {
  let left = Math.ceil(A / K);
  let right = Math.floor(B / K);

  return right - left + 1;
}

const testA = 6;
const testB = 11;
const testK = 2;

console.log(solution(testA, testB, testK));
