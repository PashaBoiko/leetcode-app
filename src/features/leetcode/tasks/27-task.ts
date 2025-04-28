/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0;
  const indexStack = [];

  for (let i=0; i < nums.length; i++) {
    if (nums[i] === val) {
      indexStack.push(i);
      continue;
    }

    k++;
    
    if (indexStack.length !== 0) {
      nums[indexStack.shift()] = nums[i];
      indexStack.push(i);
    }
  }

  return k;
};