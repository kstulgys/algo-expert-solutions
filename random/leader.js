function solution(A) {
  let candidate;
  let count = 0;

  A.forEach((el, i) => {
    if (!count) {
      candidate = el;
      count++;
    } else if (candidate === el) {
      count++;
    } else if (candidate !== el) {
      count--;
    }
  });

  let num = 0;

  A.forEach((el, i) => {
    if (el === candidate) {
      num++;
    }
  });

  return num > A.length / 2 ? A.indexOf(candidate) : -1;
}

const testA = [3, 4, 3, 2, 3, -1, 3, 3];
console.log(solution(testA));
