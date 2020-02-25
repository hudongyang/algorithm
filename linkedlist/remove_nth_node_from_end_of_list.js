/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let p1 = head
    let p2 = head
    let index = 0

    while (p2.next) {
        p2 = p2.next
        index++

        if (index <= n) {
            continue
        }

        p1 = p1.next
    }

    const len = index + 1
    if (len === n) {
        return p1.next
    }

    p1.next = p1.next.next

    return head
};