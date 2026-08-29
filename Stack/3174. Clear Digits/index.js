var clearDigits = function (s) {
  let result = [];
  result.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (!isNaN(s[i]) && isNaN(result[result.length - 1])) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join('')
};

console.log(clearDigits("abc"));
