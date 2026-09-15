var removeDuplicates = function(s){
      let stack = []
      
      for(let x of s){
         const lastEle = stack[stack.length-1]
          if(lastEle !==x){
            stack.push(x)
          } else {
            stack.pop()
          }
      }
      return stack.join("")
}

let s = "abbaca" 

console.log(removeDuplicates(s))