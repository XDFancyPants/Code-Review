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