function isAnagram(s: string, t: string): boolean {
    return t.split('').sort().join() === s.split('').sort().join();
};

//Faster solution:
function isAnagram2(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false;
    }

    const counter = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 97]++;
        counter[t.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < counter.length; i++) {
        if(counter[i] !== 0) {
            return false;
        }
    }
    return true;
};


console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

console.log(isAnagram2("anagram", "nagaram"));
console.log(isAnagram2("rat", "car"));


/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */