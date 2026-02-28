/**
 * 
Code
Testcase
Testcase
Test Result
2634. Filter Elements from Array
Easy
premium lock icon
Companies
Hint
Given an integer array arr and a filtering function fn, return a new array containing only the elements that satisfy the condition in fn.

The returned array should be created such that returnedArray[i] = arr[i] if fn(arr[i], i) returns true, and it should not contain the element if fn(arr[i], i) returns false.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, greaterThan10);
// newArray is [20, 30]
Example 2:

Input: arr = [1,2,3], fn = function greaterThan10(n) { return n > 10; }
Output: []
Explanation:
There are no elements in arr that are greater than 10.
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function greaterThan0(n) { return n > 0; }
Output: [1,2]
Explanation:
Only 1 and 2 are greater than 0.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a boolean.
 

 */

function filter(
	arr: number[],
	fn: (n: number, i: number) => boolean,
): number[] {
	const result: number[] = []
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			result.push(arr[i])
		}
	}
	return result
}

const arr = [0, 10, 20, 30]
const fn = (n: number, i: number) => n > 10

console.log(filter(arr, fn))
