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
  let maxNum = 0;
  let countersArray = [];

  A.forEach((counterIdx, idx) => {
    if (counterIdx <= N) {
      countersArray[counterIdx - 1] = countersArray[counterIdx - 1] + 1 || 1;
      if (countersArray[counterIdx - 1] > maxNum) {
        maxNum = countersArray[counterIdx - 1];
      }
    } else if (counterIdx === N + 1) {
      countersArray = Array(N).fill(maxNum);
    }
  });

  return countersArray;
}

const textN = 5;
const testA = [3, 4, 4, 6, 1, 4, 4];

console.log(solution(textN, testA));
