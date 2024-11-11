// create a class ListNode
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; 
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
};

// create two linked lists
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);

// Function to print the linked list
function printList(node) {
  let current = node;
  while (current !== null) {
    process.stdout.write(current.val + ' ');
    current = current.next;
  }
  console.log();
}

printList(result); 

// explanation
// The addTwoNumbers function takes two linked lists as input and returns a new linked list that represents the sum of the two input lists. The function works by iterating through both input lists simultaneously, adding the corresponding nodes' values along with any carry from the previous sum. The carry is updated based on the sum, and a new node with the sum's remainder is added to the result list. If there is a carry remaining after processing all nodes, an additional node is added to the result list. Finally, the function returns the head of the result list. The printList function is used to print the values of a linked list. In this example, the function is used to print the result of adding two linked lists. The example usage section demonstrates how to create two linked lists, call the addTwoNumbers function, and print the resulting linked list. The output of the example usage is the sum of the two input linked lists. The output is 7 0 8, which represents the sum of the input lists 2 -> 4 -> 3 and 5 -> 6 -> 4. The Time Complexity of the addTwoNumbers function is O(max(m, n)), where m and n are the lengths of the input lists. The function iterates through both lists once, so the time complexity is linear in the length of the longer list. The Space Complexity of the addTwoNumbers function is also O(max(m, n)). The function creates a new linked list to store the result, which can be as long as the longer of the two input lists. The space complexity is linear in the length of the longer list. the printList function has a time complexity of O(n) and a space complexity of O(1), where n is the number of nodes in the linked list. The function iterates through each node in the list once, so the time complexity is linear in the number of nodes. The function does not use any additional space that grows with the input size, so the space complexity is constant.
