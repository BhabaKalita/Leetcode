function reverseKGroup(head, k) {
    if (!head || k === 1) return head;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let start = dummy;
    let end = head;
    let count = 0;
    while (end) {
      count++;
      if (count % k === 0) {
        start = reverse(start, end.next);
        end = start.next;
      } else {
        end = end.next;
      }
    }
    return dummy.next;
  }
  
  function reverse(start, end) {
    let prev = start;
    let curr = start.next;
    let first = curr;
    while (curr !== end) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    start.next = prev;
    first.next = curr;
    return first;
  }

  /**
   * 2nd approach to solve the problem
   */

  function reverseKGroup(head, k) {
    // Base case: if the list is empty or has only one node, return it
    if (head == null || head.next == null) {
      return head;
    }
  
    // Find the current node from the head
    let current = head;
    let count = 1;
    while (current != null && count < k) {
      current = current.next;
      count++;
    }
  
    // If the current node is null, then there are less than k nodes left
    // So we don't need to reverse them, just return the head
    if (current == null) {
      return head;
    }
  
    // Otherwise, we need to reverse the first k nodes and recurse on the rest
    // Save the next node after the current node
    let next = current.next;
  
    // Break the link between the current node and the next node
    current.next = null;
  
    // Reverse the first k nodes
    let newHead = reverseList(head);
  
    // Recursively reverse the remaining nodes in groups of k
    let newTail = reverseKGroup(next, k);
  
    // Connect the reversed k nodes with the new tail
    head.next = newTail;
  
    // Return the new head of the reversed list
    return newHead;
  }
  
  // Helper function to reverse a linked list
  function reverseList(head) {
    // Initialize three pointers: prev, curr and next
    let prev = null;
    let curr = head;
    let next = null;
  
    // Iterate until curr is null
    while (curr != null) {
      // Save the next node
      next = curr.next;
  
      // Make curr point to prev
      curr.next = prev;
  
      // Move prev and curr one step forward
      prev = curr;
      curr = next;
    }
  
    // Return prev as the new head of the reversed list
    return prev;
  }