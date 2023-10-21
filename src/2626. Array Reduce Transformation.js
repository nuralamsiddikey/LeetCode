const reduce = (nums, fn, init) => {
    const length = nums.length
    let val = init


    for(let i=0;i<length;i++){
      val = fn(val,nums[i])
    }

  return val
}

 const sum = (accum,curr)=>{
    return accum+curr
 }

const nums = [1,2,3,4]
const init = 0

console.log(reduce(nums, sum, init))