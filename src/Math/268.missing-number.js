var missingNumber = function (nums) {
  const sortedNumber = nums.sort();
  for (let i = 0; i <= sortedNumber.length; i++) {
    const missingNumber = sortedNumber.includes(i);
    if (!missingNumber) return i;
  }
};
