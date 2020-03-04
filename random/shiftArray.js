function solution(A, K) {
  let arrLength = A.length;

  let newArray = Array(A.length).fill(0);

  newArray.forEach((el, i) => {
    const idx = (i + K) % arrLength;
    newArray[idx] = A[i];
  });

  return newArray;
}

let array = [3, 8, 9, 7, 6];
let times = 3;

console.log(solution(array, times));
