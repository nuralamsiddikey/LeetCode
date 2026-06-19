var findMaxAverage = function (nums, k) {
  const len = nums.length;
  let window_sum = 0;

  for (let i = 0; i < k; i++) {
    window_sum += nums[i];
  }

  let maximum_avg = window_sum / k;

  for (let i = k; i < len; i++) {
    window_sum += nums[i] - nums[i - k];
    maximum_avg = Math.max(maximum_avg, window_sum / k);
  }

  return maximum_avg.toFixed(5);
}

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;

findMaxAverage(nums, k);

