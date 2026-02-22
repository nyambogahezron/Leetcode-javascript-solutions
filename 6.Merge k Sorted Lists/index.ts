/**
 * Problem: Merge k Sorted Lists (Intermediate/Advanced)
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Example:
 * lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * 
 * Challenge: Can you solve this in O(N log k) time, where N is the total number of nodes and k is the number of linked lists?
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // Write your code here
  return null;
}

// Helper function to create linked list from array for testing
function createList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current: ListNode = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Test case example
let list1 = createList([1, 4, 5]);
let list2 = createList([1, 3, 4]);
let list3 = createList([2, 6]);

console.log(mergeKLists([list1, list2, list3])); 
// Expected: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Explanation
// ...
