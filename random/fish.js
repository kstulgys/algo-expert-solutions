function solution(A, B) {
  let stack = [];

  A.forEach((el, idx) => {
    let currentEntry = {val: el, dir: B[idx]};
    if (!stack.length) {
      stack.push(currentEntry);
    } else if (currentEntry.dir === 1) {
      stack.push(currentEntry);
    } else if (currentEntry.dir === 0) {
      while (
        stack[stack.length - 1] &&
        stack[stack.length - 1].dir === 1 &&
        stack[stack.length - 1].val < currentEntry.val
      ) {
        stack.pop();
      }

      if (!stack[stack.length - 1] || stack[stack.length - 1].dir === 0) {
        stack.push(currentEntry);
      }
    }
  });

  return stack.length;
}

const testA = [4, 3, 2, 1, 5];
const testB = [0, 1, 0, 1, 0];

console.log(solution(testA, testB));
