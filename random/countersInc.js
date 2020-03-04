function solution(N, A) {
  /**
   * inc by 1 on num (idx) if num <= N (counters)
   */
  // 0,0,1,0,0
  // 0,0,1,1,0
  // 0,0,1,2,0
  /**
   * inc all by max if num === N + 1 (counters)
   */
  // 2,2,2,2,2
  // continue
  // 3,2,2,2,2
  // 3,2,2,3,2
  // 3,2,2,4,2

  // make array of 0
  // loop through A and change array(0)[]
  let countersArray = Array(N).fill(0);
  let currentMax = 0;
  let startLine = 0;

  A.forEach((counterIdx, idx) => {
    let x = counterIdx - 1;
    if (counterIdx <= N) {
      if (startLine > countersArray[x]) {
        countersArray[x] = startLine + 1;
      } else {
        countersArray[x] += 1;
      }

      if (countersArray[x] > currentMax) {
        currentMax = countersArray[x];
      }
    } else if (counterIdx > N) {
      startLine = currentMax;
    }
  });

  countersArray.forEach((el, i) => {
    if (el < startLine) {
      countersArray[i] = startLine;
    }
  });

  return countersArray;
}

const textN = 5;
const testA = [3, 4, 4, 6, 1, 4, 4];

console.log(solution(textN, testA));
