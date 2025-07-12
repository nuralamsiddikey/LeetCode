const symbol = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let sum = 0;
  let nextValue = 0;

  for (let i = 0; i < s.length; i++) {
    const value = symbol[s[i]];

    if (i < s.length - 1) {
      nextValue = symbol[s[i + 1]];
      if (nextValue > value) {
        sum += nextValue - value;
        i++;
      } else sum += value;
    } else {
      sum += value;
    }
  }

  return sum;
};
