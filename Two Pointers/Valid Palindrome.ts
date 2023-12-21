function isPalindrome(s: string): boolean {
    let forwards = s.replaceAll(/[^a-zA-Z\d]/g, "").toLowerCase();
    return forwards === forwards.split("").reverse().join("");
};

// two pointers solution
function isPalindrome2(s: string): boolean {
    let formattedS = s.replaceAll(/[^a-zA-Z\d]/g, "").toLowerCase();
    let i=0;
    let j=formattedS.length-1;

    while(i<j){
        if(formattedS[i] !== formattedS[j]) return false;
        i++;
        j--
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));

console.log(isPalindrome2("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("race a car"));
console.log(isPalindrome2(" "));

/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */