/**
 * 
Code
Testcase
Testcase
Test Result
2633. Convert Object to JSON String
Easy
premium lock icon
Companies
Hint
Given an object obj, return a JSON string representation of it.

This is equivalent to JSON.stringify(obj), but the implementation must be done without using it.

 

Example 1:

Input: obj = {"x":5,"y":10}
Output: "{"x":5,"y":10}"
Explanation:
We convert the object to a JSON string.
Example 2:

Input: obj = {"a":true,"b":false}
Output: "{"a":true,"b":false}"
Explanation:
We convert the object to a JSON string.
Example 3:

Input: obj = {"a":null,"b":true}
Output: "{"a":null,"b":true}"
Explanation:
We convert the object to a JSON string.
 

Constraints:

obj is a valid JSON object.
 */

function jsonStringify(obj: any): string {
	if (obj === null) {
		return 'null'
	}
	if (typeof obj === 'string') {
		return `"${obj}"`
	}
	if (typeof obj === 'number' || typeof obj === 'boolean') {
		return obj.toString()
	}
	if (Array.isArray(obj)) {
		return `[${obj.map(jsonStringify).join(',')}]`
	}
	const keys = Object.keys(obj)
	const pairs = keys.map(
		(key) => `${jsonStringify(key)}:${jsonStringify(obj[key])}`,
	)
	return `{${pairs.join(',')}`
}
