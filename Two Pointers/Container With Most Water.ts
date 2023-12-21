function maxArea(height: number[]): number {
    let maxArea = 0;
    // for (let i=0; i<height.length-1; i++) {
    //     const h = height[i];
    //     for (let j=i+1; j<height.length; j++) {
    //         const width = j-i;
    //         const minHeight = Math.min(h, height[j]);
    //         maxArea = Math.max(maxArea, minHeight * width);
    //     }
    // }
    // return maxArea

    let leftH = 0;
    let rightH = height.length-1;

    while(leftH < rightH) {
        const width = rightH - leftH;
        const minHeight = Math.min(height[leftH], height[rightH]);

        maxArea = Math.max(maxArea, minHeight * width);

        if(height[leftH] < height[rightH]) {
            leftH++;
        } else {
            rightH--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));

/**
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */