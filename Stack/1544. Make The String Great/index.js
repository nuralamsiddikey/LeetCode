var makeGood = function (s) {
  let stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    
    const lastEleCode =stack.length? stack[stack.length - 1].charCodeAt(0):999
    const eleCode = s[i].charCodeAt(0);
    if (Math.abs(lastEleCode - eleCode) === 32) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('')
};

//let s = "leEeetcode";
//console.log(makeGood(s));
