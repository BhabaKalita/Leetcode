/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

    if(!head) return null;

    let curr = head;
    let mp = new Map();

// copy to new node
    while(curr) {
        mp.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    curr = head;
    while(curr) {
        mp.get(curr).next = mp.get(curr.next) || null;
        curr = curr.next;
    }

    curr = head;
    while(curr) {
        mp.get(curr).random = mp.get(curr.random) || null;
        curr = curr.next;
    }
    return mp.get(head);
};