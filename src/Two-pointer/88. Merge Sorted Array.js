var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j< n; j++,i++) {
    nums1[i] = nums2[j]
  }
  nums1.sort((a,b)=>a-b)
};