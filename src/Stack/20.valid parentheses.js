
var isValid = function(s){
    const stack = [];
    const pairs = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    for (let char of s) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (char !== pairs[stack.pop()]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  
