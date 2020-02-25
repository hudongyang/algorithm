/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head

    let current = head
    let len = 0
    while (current.next) {
        len++
        current = current.next
    }

    len++

    const tail = current
    const step = k % len

    if (step === 0) return head

    let index = 0
    current = head

    while (current) {
        if (index + 1 === len - step) {
            break
        }

        index++
        current = current.next
    }

    const next = current.next
    tail.next = head
    current.next = null

    return next
};