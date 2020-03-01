function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)

  return Math.ceil((Y - X) / D);
}

let pos = 10,
  jump = 30,
  target = 85;

console.log(solution(pos, target, jump));
