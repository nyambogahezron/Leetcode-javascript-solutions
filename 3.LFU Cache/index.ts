/**
 * Problem: LFU Cache (Advanced)
 * 
 * Design and implement a data structure for a Least Frequently Used (LFU) cache.
 * 
 * Implement the LFUCache class:
 * - LFUCache(int capacity) Initializes the object with the capacity of the data structure.
 * - int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
 * - void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys have the same frequency), the least recently used key would be invalidated.
 * 
 * Challenge: Can you do both get and put operations in O(1) average time complexity?
 */

class LFUCache {
  capacity: number;
  
  constructor(capacity: number) {
    this.capacity = capacity;
    // Write your code here
  }

  get(key: number): number {
    // Write your code here
    return -1;
  }

  put(key: number, value: number): void {
    // Write your code here
  }
}

// Test case example
const lfu = new LFUCache(2);
lfu.put(1, 1);
lfu.put(2, 2);
console.log(lfu.get(1)); // return 1
lfu.put(3, 3); // evicts key 2
console.log(lfu.get(2)); // return -1 (not found)

// Explanation
// ...
