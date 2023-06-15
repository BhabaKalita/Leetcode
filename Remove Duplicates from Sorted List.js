/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;

    let curr = head;
    while(curr.next) {
        if(curr.val === curr.next.val)
            curr.next = curr.next.next;
        else
            curr = curr.next;
    }
    return head;
};