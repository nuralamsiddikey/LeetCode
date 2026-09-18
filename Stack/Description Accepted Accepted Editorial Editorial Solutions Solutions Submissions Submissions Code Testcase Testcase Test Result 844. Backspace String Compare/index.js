var afterBackSpace = function (str) {
  const stack = [];
  for (let x of str) {
    if (x === "#") {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  return stack.join("");
};

var backspaceCompare = function (s, t) {
  const a = afterBackSpace(s);
  const b = afterBackSpace(t);

  return a === b;
};

let s = "a#c"
let t = "b"

console.log(backspaceCompare(s, t));
