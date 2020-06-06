/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const str = s.trim();
  const res = Function('"use strict";return (' + str + ")")();
  return Math.floor(res);
};

const input = "14/3*2";
console.log(calculate(input));
