/**
 * srouce numbers
 * @type {number[]} nums
*/
const nums = [1, 2, 3, 4, 4];

/**
 * return true if nums contains duplicate
 * @param {number[]} nums
 * @return {boolean}
*/
function hasDuplicate() {
  const checkedMap = new Map();
  // step1: single linear scan left -> right, build hashMap as we go
  for (let i = 0; i < nums.length; i++) {
    // step2: if Map contains key(nums[i]), then duplicate found so return true
    if(checkedMap.has(nums[i])) {
      return true;
    }
    checkedMap.set(nums[i], nums[i]);
  }
  // return false
  return false;
}

console.log(hasDuplicate());

// runtime complexity O(n): Single linear scan of nums, so O(n) = O(n)
// space complexity O(n): if items in array1 are unique, then hashmap size will be O(n)