// https://leetcode.com/problems/two-sum/


// Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// P: We are given an array of integers (like this bb [1,2,3]). We are also given an integer target...amount? I think. Indices = plural of `index`. It wants the indices of two numbers in the arr that add up to the amount of `target`. Is it the first that matches the target, or all that match the target? Each input has exactly ONE soln. You may not use the same element twice. Answer can be returned in any order ([1,2] or [2,1]). Will it ever be an empty arr? Assume that it will be an arr of 1+ numbers. If not, throw an err bitch. Assume that you will return an arr of two.

//R: indices in an arr. The indices are for the two nums that add up to target num. so it will look like [0,1]

//E

//twoSum(arr,target)
console.log(twoSum([2,7,11,15],9),[0,1])
console.log(twoSum([3,2,4],6),[1,2])
console.log(twoSum([3,3],6),[0,1])

// Constraints: ----constraints limit the number of possible edge cases. 

//     2 <= nums.length <= 10^4 ---at least 2 nums, at most 10^4
//     -10^9 <= nums[i] <= 10^9 ---all of the numbers possible in the arr are between 10^-9 and 10^9
//     -10^9 <= target <= 10^9 ---all the nums possible for the target are between 10^-9 and 10^9
//     Only one valid answer exists.

//P: make a function that takes in two params: an arr, and a target
/*
 * @param {number[]} nums // this says that [] is an array of numbers
 * @param {number} target //this says that target is just an number
 * @return {number[]} return an arr of numbers (indices of the nums that add up to the target num)
 */
 var twoSum = function(nums, target) {
    //take our arr (which is nums for some reason), and loop thru that bb
    for(let i = 0; i < nums.length; i++){
        //we want two for loops because we want to be able to grab two rando nums in the arrs, not just nums that are right next to each other. 
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
        //does nums[i] + nums[i+1] = target?
        //if yes, get them indices and put them in that empty arr
        //if not, then keep looking bb. 
        
};

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

 



 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

