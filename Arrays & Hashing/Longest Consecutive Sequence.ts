function longestConsecutive(nums: number[]): number {
    // const sorted = nums.sort((n1,n2) => n1 - n2);
    // let result = Math.min(1, nums.length);
    // let current = 1;
    // for(let i=1; i<sorted.length; i++) {
    //     if(sorted[i] - sorted[i-1] === 0) {

    //     } else if(sorted[i] === sorted[i-1]+1) {
    //         current++;
    //     } else {
    //         current =1;
    //     }
    //     result = current > result? current: result;
    // }
    // return result;
    let result = Math.min(1, nums.length);
    const numSet = new Set(nums);
    for (const num of numSet) {
        if(!numSet.has(num-1)) {
            let currentStreak = 1;
            while(numSet.has(num+currentStreak)) {
                currentStreak++;
            }
            result = Math.max(result, currentStreak);
        }
    }
    return result;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));


/**
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */