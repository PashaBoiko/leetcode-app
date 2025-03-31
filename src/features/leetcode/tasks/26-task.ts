/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
      if (i === 0) continue;
      
      if (nums[k] !== nums[i]) {
          nums[k+1] = nums[i];
          k++
      }
  }

  return k+1;
}