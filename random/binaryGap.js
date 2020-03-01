function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let gaps = [];

  let binaryNumArray = N.toString(2).split("");

  let count = 0;

  binaryNumArray.forEach((el, i) => {
    let numEl = Number(el);
    let prevEl = Number(binaryNumArray[i - 1]);

    if (numEl === 0 && prevEl === 1) {
      count++;
    } else if (numEl === 0 && prevEl === 0) {
      count++;
    } else if (numEl === 1 && prevEl === 0) {
      gaps.push(count);
      count = 0;
    }
  });

  let res = Math.max(...gaps);

  return res === -Infinity ? 0 : res;
}

const test = 1041;
// const test = 32;

console.log(solution(test));
