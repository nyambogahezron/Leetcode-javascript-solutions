var twoSum = function (nums, target) {
  let Output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let x = nums[i],
        y = nums[j],
        sum = x + y;
      //  console.log('x:', x, 'y:', y, 'sum:', sum);
      if (sum === target) {
        Output.push(i);
        Output.push(j);
        console.log(Output);
        return Output;
      }
    }
  }
  console.log('No match found');
  return;
};

twoSum([2, 7, 11, 15], 9);

//  Explanation [The brute force approach]
// The brute force approach is simple. Loop through each element x and find if there is another value that equals to target - x. As finding another value requires looping through the rest of array, its time complexity is O(n^2). - -The space complexity of this code is (O(1)) (constant space), excluding the space required for the input and output. The Output array only stores two indices, so its space usage is constant. The additional variables x, y, and sum also use constant space

// Approach 2: Two-pass Hash Table

var twoSum = function (nums, target) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    // console.log('num map', numMap);

    if (numMap.hasOwnProperty(complement)) {
      console.log([numMap[complement], i]);
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  console.log('No match found');
  return [];
};

twoSum([11, 15, 2, 7], 9);


// Explanation [The two-pass hash table approach]
// To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table. By using a hash table that maps a value to its index in the array, we can do a lookup in O(1) time. - -A simple implementation uses two iterations. In the first iteration, we add each element's value and its index to the table. Then, in the second iteration, we check if each element's complement (target - nums[i]) exists in the table. - -The space complexity of this code is O(n) (linear space), where n is the size of the array. The space required for the hash table is proportional to the number of elements it contains. The time complexity of this code is O(n) (linear time). For each element, we can insert it into the table and look up its complement in O(1) time. Hence, the time complexity is O(n) overall. - -The space complexity of this code is O(n) (linear space), where n is the size of the array. The space required for the hash table is proportional to the number of elements it contains. The time complexity of this code is O(n) (linear time). For each element, we can insert it into the table and look up its complement in O(1) time. Hence, the time complexity is O(n) overall. - -The space complexity of this code is O(n) (linear space), where n is the size of the array. The space required for the hash table is proportional to the number of elements it contains. The time complexity of this code is O(n) (linear time). For each element, we can insert it into the table and look up its complement in O(1) time. Hence, the time complexity is O(n) overall. - -The space complexity of this code is O(n) (linear space), where n is the size of the array. The space required for the hash table is proportional to the number of elements it contains. The time complexity of this code is O(n) (linear time). For each element, we can insert it into the table and look up its complement in O(1) time. Hence, the time complexity is O(n) overall. -