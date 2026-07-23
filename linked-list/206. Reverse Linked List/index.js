class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var reverseList = function (head) {
  let current = head;
  let prev = null;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev
};

let head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(15);
head.next.next.next = new ListNode(20);

console.log(reverseList(head))
