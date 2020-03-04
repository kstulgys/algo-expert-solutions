function solution(A) {
  let transform = A.map((el, i) => {
    return A[i + 1] - el;
  });

  let globalMax = 0;
  let localMax = 0;

  transform.forEach((el, idx) => {
    localMax = Math.max(el + localMax, el);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  });

  return globalMax;
}

let A = [];
A[0] = 23171;
A[1] = 21011;
A[2] = 21123;
A[3] = 21366;
A[4] = 21013;
A[5] = 21367;

console.log(solution(A));
