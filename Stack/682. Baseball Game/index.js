var calPoints = function (operations) {
  let stack = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      stack.push(Number(stack[stack.length - 1]) * 2);
    } else if (operations[i] === "+") {
      stack.push(
        Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]),
      );
    } else if (!isNaN(operations[i])) {
      stack.push(operations[i]);
    }
  }
  return stack.reduce(
    (acc, current) => (Number(acc) + Number(current)),
    0,
  );
};

let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];

console.log(calPoints(ops));
