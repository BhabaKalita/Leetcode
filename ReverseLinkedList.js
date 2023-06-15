// helper Lineked List
function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

// Main algorithm using iterative method
var reverseList = function(head) {
    
    let prev = null;
    while(head !== null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// Using recursive method

var reverseListRec = function(head, prev=null) {
    
    if(head == null) return prev;

    let next = head.next;
    head.next = prev;
    return reverseListRec(next,head);
}

console.log(reverseListRec(a));