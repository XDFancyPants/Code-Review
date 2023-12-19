function productExceptSelf(nums: number[]): number[] {
    const results = [];
    for(let i=0; i<nums.length; i++) {
        let result = 1;
        for(let j=0; j<nums.length; j++) {
            if(j !== i) {
                result *= nums[j];
            }
        }
        results.push(result);
    }
    // for(let i=0; i<nums.length; i++) {
    //     const nums2 = [...nums];
    //     nums2.splice(i, 1);
    //     results.push(nums2.reduce((total, current) => total * current, 1))
    // }
    return results;
}

function productExceptSelf2(nums: number[]): number[] {
    const results = [];
    let prefix = 1;
    for(let i=0; i<nums.length; i++) {
        results[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for(let i=nums.length-1; i>=0; i--) {
        results[i] *= suffix;
        suffix *= nums[i];
    }
    return results;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));

console.log(productExceptSelf2([1,2,3,4]));
console.log(productExceptSelf2([-1,1,0,-3,3]));

/**
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */