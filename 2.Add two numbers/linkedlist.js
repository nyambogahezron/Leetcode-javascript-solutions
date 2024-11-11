// linked list implementation

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(7);
let node4 = new ListNode(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

// Print the entire linked list
list.printList();
