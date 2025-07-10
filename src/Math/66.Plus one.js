var plusOne = function (digits) {
  const sum = [];
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry > 0) {
      let s = digits[i] + carry;
      if (s > 9) {
        sum.unshift(s % 10);
        carry = 1;
      } else {
        sum.unshift(s);
        carry = 0;
      }
    } else {
      sum.unshift(digits[i]);
    }

    if (i === 0 && carry > 0) {
      sum.unshift(carry);
    }
  }
  return sum;
};
