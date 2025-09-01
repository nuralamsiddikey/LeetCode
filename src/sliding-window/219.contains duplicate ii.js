var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length;
  let map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;
    else map.set(nums[i], i);
  }
  return false;
};

let nums = [11, 2, 3, 10, 1, 1];
let k = 0

console.log(containsNearbyDuplicate(nums, k));
