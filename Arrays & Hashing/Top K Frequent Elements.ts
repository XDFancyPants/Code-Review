function topKFrequent(nums: number[], k: number): number[] {
    const resultMap = new Map<number, number>();
    for(let i=0; i<nums.length; i++) {
        if(resultMap.has(nums[i])) {
            resultMap.set(nums[i], resultMap.get(nums[i])! + 1);
        } else {
            resultMap.set(nums[i], 1);
        }
    }
    const result = [];
    const sorted = new Map([...resultMap.entries()].sort((a, b) => b[1] - a[1]));
    for (let i=0; i<k; i++) {
        result.push([...sorted][i][0])
    }

    return result;
};

// way faster solution:
function topKFrequent2(nums: number[], k: number): number[] {
    const countMap = new Map<number, number>();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1)
    }
    return [...countMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(el => el[0])
}

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))

console.log(topKFrequent2([1,1,1,2,2,3], 2))
console.log(topKFrequent2([1], 1))
/**
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */