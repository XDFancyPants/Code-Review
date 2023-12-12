function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size < nums.length;
}

/**
 * Less memory solution, without using Set, way slower
 */

function containsDuplicate2(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

console.log(containsDuplicate2([1,2,3,1]));
console.log(containsDuplicate2([1,2,3,4]));
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]));

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */