var reversePrefix = function (word, ch) {
    const index = word.indexOf(ch);
    const first = word.slice(0, index + 1);
  
    const last = word.slice(index + 1, word.length);
  
    const firstReverse = first.split("").reverse().join("");
  
    return firstReverse + last;
  };
  