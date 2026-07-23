
var minLength = function (s) {
    let len;
    do {
      len = s.length;
      s = s.replace("AB", "").replace("CD", "");
    } while (s.length !== len);
  
    return s.length;
  };
  