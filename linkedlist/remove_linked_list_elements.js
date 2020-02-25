/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let cur = head
    let prev = null

    while (cur) {
        if (prev && cur.val === val) {
            prev.next = cur.next
        } else {
            prev = cur
        }

        cur = cur.next
    }

    // head 为 val 的特殊情况处理
    if (head && head.val === val) {
        return head.next
    }

    return head
};